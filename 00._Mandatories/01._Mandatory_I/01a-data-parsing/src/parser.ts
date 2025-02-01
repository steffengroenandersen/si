import * as fs from "fs";
import * as xml2js from "xml2js";
import * as yaml from "js-yaml";

export class Parser {
  // JSON
  async parseJson(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  }

  // XML
  async parseXml(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return new Promise<any>((resolve, reject) => {
      xml2js.parseString(fileContent, (err: any, result: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }

  // YAML
  async parseYaml(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return yaml.load(fileContent);
  }

  // CSV
  async parseCsv(filePath: string): Promise<void> {
    console.log("No parser yet...");
  }

  // TXT (No parser yet)
  async parseTxt(filePath: string): Promise<void> {
    console.log("No parser yet...");
  }

  // Main parser
  async parseFile(filePath: string, fileExt: string): Promise<any> {
    switch (fileExt) {
      case ".json":
        return this.parseJson(filePath);
      case ".xml":
        return this.parseXml(filePath);
      case ".yaml":
      case ".yml":
        return this.parseYaml(filePath);
      case ".csv":
        return this.parseCsv(filePath);
      case ".txt":
        return this.parseTxt(filePath);
      default:
        console.error(`No parser found for ${fileExt}`);
        return null;
    }
  }
}
