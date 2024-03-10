from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from parser import parse_file
from models import NursingHome

app = FastAPI()

origins = [
    "http://localhost:3000",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of origins that can make requests
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


# Path to your PDF file
nursing_homes: list[NursingHome] = parse_file("Australia-Service-List-2023.xlsx")

@app.get("/nursing-homes", response_model=list[NursingHome])
async def get_nursing_homes():
    return nursing_homes

    
