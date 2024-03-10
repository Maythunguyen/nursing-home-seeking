from pydantic import BaseModel

class NursingHome(BaseModel):
    name: str
    address_line_1: str
    suburb: str
    state: str
    post_code: str
