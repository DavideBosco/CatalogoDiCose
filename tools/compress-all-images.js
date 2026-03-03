import getFiles from "./get-files.js";
import writeCompressedImage from "./write-compressed-image.js";

// Get all images from source directory
const allImagePaths = getFiles('./src/img');

// Compress them and write them to distribution directory
allImagePaths.map((path) => {
  const trimPath = path.replace('./', '');
  writeCompressedImage(trimPath);
});
