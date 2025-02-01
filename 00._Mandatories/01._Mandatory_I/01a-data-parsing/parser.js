const fs = require("node:fs").promises;
const path = require("node:path");

const folderPath = "./data/";

async function getFiles(folderPath) {
  const fileObjects = [];

  try {
    const files = await fs.readdir(folderPath);

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const fileExtension = path.extname(file).toLowerCase();

      fileObjects.push({ fileName: file, filePath: filePath, fileExt: fileExtension });
    });
  } catch (err) {
    console.error(err);
  }

  return fileObjects;
}

(async () => {
  const fileObjects = await getFiles(folderPath);
  console.log(fileObjects);
})();
