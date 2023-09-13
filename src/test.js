import { readFileSync } from 'fs';

function convertImageToBase64(filePath) {
  try {
    // Read the image file as a buffer
    const imageBuffer = readFileSync(filePath);

    // Convert the buffer to a base64 encoded string
    const base64String = imageBuffer.toString('base64');

    return base64String;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return null;
  }
}

// Example usage
const imagePath = 'C:/Users/ASUS/Pictures/1.png'; // Replace with the path to your image file
const base64String = convertImageToBase64(imagePath);

if (base64String) {
  console.log('Base64 Encoded Image:');
  console.log(base64String);
}