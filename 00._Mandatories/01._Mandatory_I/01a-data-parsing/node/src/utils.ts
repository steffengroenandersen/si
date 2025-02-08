import * as fs from "fs/promises";
import * as path from "path";

export interface FileObject {
  fileName: string;
  filePath: string;
  fileExt: string;
}

export async function getFiles(folderPath: string): Promise<FileObject[]> {
  const fileObjects: FileObject[] = [];

  const files = await fs.readdir(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileExtension = path.extname(file).toLowerCase();

    fileObjects.push({ fileName: file, filePath: filePath, fileExt: fileExtension });
  });

  return fileObjects;
}
