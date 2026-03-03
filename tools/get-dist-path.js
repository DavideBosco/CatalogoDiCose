import path from "node:path";

/** from a source file path make the equivalent distribution file path.
 * @param {string} filePath path to a file (src/foo/bar.ext)
 * @returns {{distDirPath : string, fileName : string}}
 * - distDirPath: path to the dist directory that mirrors the src one (./dist/foo)
 * - fileName - name of the file without extension (bar)
 */
export default function getDistPath(filePath) 
{
    const reparentPath = thisPath => thisPath.replace('src', 'dist');

    // The path from the root of the Node application to the filename of the image (and fix backslashes)
    const srcDirName = path.dirname(filePath).replaceAll('\\', '/');
    // The path but with dist as root instead of src
    const distDirName = reparentPath(srcDirName);
    // The path moved to the dist directory
    const distDirPath = `./${distDirName}`;

    // The image name, plus file extension
    const baseName = path.basename(filePath);
    // The image file extension
    const extName = path.extname(filePath);
    // The name of the image, without the file extension
    const fileName = baseName.replace(extName, '');

    return {
        distDirPath,
        fileName
    };
};
