import { getFiles } from "./utils";
import { FileObject } from "./utils";
import { Parser } from "./parser";

const folderPath = "./data/";

(async () => {
  const fileObjects: FileObject[] = await getFiles(folderPath);
  const parser = new Parser();

  for (const fileObj of fileObjects) {
    const parsedData = await parser.parseFile(fileObj.filePath, fileObj.fileExt);
    if (parsedData) {
      console.log(`Parsed data for ${fileObj.fileName}:`, parsedData);
    }
  }
})();
