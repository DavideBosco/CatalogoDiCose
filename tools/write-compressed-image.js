import sharp from "sharp";
import fs from 'node:fs';
import getDistPath from "./get-dist-path.js";

/** write the compressed version of an image from the source direcotry to distribution directory
 * @param {string} filePath path to a file (src/foo/bar.ext)
 */
export default function writeCompressedImage(filePath) 
{
    // get distribution directory path and file name
    const {distDirPath, fileName} = getDistPath(filePath);
   
    // check if the directory form distDirPath exists. If it does not, then build it recursively
    if (!fs.existsSync(distDirPath)) 
    {
        fs.mkdirSync(distDirPath, {recursive: true});
    }

    // compress image in dist directory with same sub path
    sharp(filePath).webp().toFile(`${distDirPath}/${fileName}.avif`);
    sharp(filePath).webp().toFile(`${distDirPath}/${fileName}.webp`);
    sharp(filePath).webp().toFile(`${distDirPath}/${fileName}.jpg`);
}
