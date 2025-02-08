from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
  return {"data": "Hello world"}

# Task create a greetings route

@app.get("/greetings")
def root():
  return {"data": "Grettings friend!"}