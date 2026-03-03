import { argv } from "node:process";
import writeCompressedImage from "./write-compressed-image.js";


// Destructuring the Array from Node which includes data we need
// (filePath is the path to the changed image (src/foo/bar.ext). fileEvent is the type of change)
const [node, thisFile, filePath, fileEvent] = argv;
// White-list of events which should cause Sharp to generate images
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) 
{
    writeCompressedImage(filePath);
}
