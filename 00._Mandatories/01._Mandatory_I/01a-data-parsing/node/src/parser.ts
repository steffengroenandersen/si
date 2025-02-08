import csv from "csvtojson";
import * as xml2js from "xml2js";
import * as yaml from "yaml";
import * as fs from "fs";

export class Parser {
  // JSON
  async parseJson(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  }

  // XML
  async parseXml(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
    return new Promise<any>((resolve, reject) => {
      parser.parseString(fileContent, (err: any, result: any) => {
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
    return yaml.parse(fileContent);
  }

  // CSV
  async parseCsv(filePath: string): Promise<any> {
    return await csv().fromFile(filePath);
  }

  // TXT
  async parseTxt(filePath: string): Promise<any> {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    return yaml.parse(fileContent);
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
