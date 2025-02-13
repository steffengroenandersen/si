import fs from "fs/promises";
import csv from "csvtojson";

// CSV
const CSVPath = "./data/data.csv";

// Reader
async function readCSV() {
  try {
    const csvData = await fs.readFile(CSVPath, "utf8");
    return csvData;
  } catch (error) {
    console.error("Error reading CSV file:", error);
  }
}

// Parser
async function parseCSVToJSON(path) {
  try {
    const csvData = await readCSV(path);
    const parsedData = csv().fromString(csvData);
    return parsedData;
  } catch (error) {
    console.error(error);
  }
}

// const data = await parseCSVToJSON(CSVPath);
// console.log(data[1].brand);

// JSON
const JSONPath = "./data/data.json";
async function readJSON() {
  try {
    const jsonData = await fs.readFile(JSONPath, "utf8");
    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

async function parseJSON(path) {
  try {
    const jsonData = readJSON(path);
  } catch (error) {
    console.error(error);
  }
}

const data = await readJSON();

// TXT (formatted as YAML)
const TXTPath = "./data/data.txt";
async function readTXT() {
  try {
    const txtData = await fs.readFile(TXTPath, "utf8");
    console.log(txtData);
  } catch (error) {
    console.error("Error reading TXT file:", error);
  }
}
// readTXT();

// XML
const XMLPath = "./data/data.xml";
async function readXML() {
  try {
    const xmlData = await fs.readFile(XMLPath, "utf8");
    console.log(xmlData);
  } catch (error) {
    console.error("Error reading XML file:", error);
  }
}
// readXML();

// YAML
const YAMLPath = "./data/data.yaml";
async function readYAML() {
  try {
    const yamlData = await fs.readFile(YAMLPath, "utf8");
    console.log(yamlData);
  } catch (error) {
    console.error("Error reading YAML file:", error);
  }
}
// readYAML();
