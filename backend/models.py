from pydantic import BaseModel

class todo(BaseModel):
    name:str
    email:str
    password:str
    age:int