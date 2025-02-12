import { promises as fs } from "fs";
import * as xml2js from "xml2js";
import * as yaml from "yaml";
import csv from "csvtojson";

import express from "express";

const app = express();
const PORT = 3000;

app.get("/json", async (req, res) => {
  const data = await parseJson("./data/data.json");
  res.setHeader("Content-Type", "application/json");
  res.send({ data: data });
});

app.get("/csv", async (req, res) => {
  const data = await parseCsv("./data/data.csv");
  res.header("Content-Type", "application/json");
  res.send({ data: data });
});

app.get("/txt", async (req, res) => {
  const data = await parseTxt("./data/data.txt");
  res.setHeader("Content-Type", "application/json");
  res.json({ data: data });
});

app.get("/xml", async (req, res) => {
  const data = await parseXml("./data/data.xml");
  res.header("Content-Type", "application/json");
  res.send({ data: data });
});

app.get("/yaml", async (req, res) => {
  const data = await parseYaml("./data/data.yaml");
  res.setHeader("Content-Type", "application/json");
  res.json({ data: data });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// UTILS

function parseJson(filePath) {
  return fs.readFile(filePath, "utf8").then((fileContent) => {
    return JSON.parse(fileContent);
  });
}

function parseCsv(filePath) {
  return csv().fromFile(filePath);
}

function parseTxt(filePath) {
  return fs.readFile(filePath, "utf8").then((fileContent) => {
    return yaml.parse(fileContent);
  });
}

function parseXml(filePath) {
  return fs.readFile(filePath, "utf8").then((fileContent) => {
    const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
    return new Promise((resolve, reject) => {
      parser.parseString(fileContent, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });
}

function parseYaml(filePath) {
  return fs.readFile(filePath, "utf8").then((fileContent) => {
    return yaml.parse(fileContent);
  });
}
