from fastapi import FastAPI
import requests
app = FastAPI()

@app.get("/fastapiData")
def getFastAPIData():
  return {"data":"fastapiData"}

@app.get("/me")
def getMe():
  return {"data": {"name":"Steffen", "age":"33"}}


@app.get("/fetchFromExpress")
async def fetchFromExpress():
  response = requests.get("http://127.0.0.1:8080/me")
  data = response.json()
  return data