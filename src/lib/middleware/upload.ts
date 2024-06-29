// middleware/upload.js

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2; // Ensure you're using v2 of the Cloudinary SDK

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer and Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'your_folder_name', // optional, if you want to specify a folder path
    resource_type: 'auto' // indicates the type of resource (image, video, raw)
  }
});

// Initialize multer instance to handle file uploads
const upload = multer({ storage: storage });

module.exports = upload;
