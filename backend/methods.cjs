const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 3000;

const uri = ''; // mongo cluster Uri
const DB_NAME = 'testDb'
const COLLECTION_NAME = 'posts'

//Allowing CORS
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your frontend's domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//GET method to get posts
app.get('/api/getPosts', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db(DB_NAME); 
    const collection = database.collection(COLLECTION_NAME); 

    const data = await collection.find({ isDeleted: false }).toArray();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//POST method to create posts
app.post('/api/posts', async (req, res) => {
    const body = req.body
    try {
      const client = new MongoClient(uri);
      const collection = client.db(DB_NAME).collection(COLLECTION_NAME);
  
      // Create a new document to insert into the collection
      const newPost = {
        id:uuidv4(),
        title: body.title,
        body: body.body,
        imageData: body.base64String,
        isDeleted:false,
        metadata: {
          likes:0,
          dislikes:0
        }
      };

      const result = await collection.insertOne(newPost);
  
      res.json({ message: 'Post created', postId: result.insertedId });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/api/delete/:id', async (req, res) => {
    
    try {
      
      const client = new MongoClient(uri);
      await client.connect();
      const collection = client.db(DB_NAME).collection(COLLECTION_NAME);
  
      const objectId = req.params.id;
      const updateOperation = {
        $set: {
          isDeleted: true
        },
      };
      
      const result = await collection.findOneAndUpdate({ id: objectId },updateOperation);
  
      res.json({ message: 'Post Deleted', postId: result });
    } catch (error) {
      console.error('Error deleting record:', error);
      res.status(500).json({ message: 'Internal server error' });
    } 
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});