from fastapi import FastAPI, HTTPException
# CORS => Cross origin resource sharing helps frontend and backend to communicate with each other
# as both fastapi and react have different by default ports hence we need to import corsmiddleware to ease communication between the two
from fastapi.middleware.cors import CORSMiddleware
import db
import models
# imported httpexception to handle the errors if response is ok return it else always return the error
app = FastAPI()

# the origin of react to which fast api needs to connect
origins = ["https://localhost:3000"]

# this actually adds the communication layer between backend , user and database
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.get("/api/todo{title}")
def get_one(name:str):
    response = db.get_one(name)
    if response :
        return {"response":response}
    raise HTTPException(404,"Todo not found for {name}")

@app.get("/app/all")
def get_all():
    response = db.get_all()
    if response :
        return {"response":response}
    raise HTTPException(404,"No Todo found in db")

@app.post("/createapi")
def createtodo(todo:models.todo):
    response = db.create(todo)
    if response :
        return {"response":response}
    raise HTTPException(404,"Todo not found")

@app.put("/updateapi")
def updatetodo(todo:models.todo):
    response = db.update(todo)
    if response :
        return {"response":response}
    raise HTTPException(404,"Todo not found")

@app.delete("/deleteapi/todo{title}")
def deletetodo(name:str):
    response = db.delete(name)
    if response :
        return {"response":"deleted succesfully"}
    raise HTTPException(404,"Todo not found")