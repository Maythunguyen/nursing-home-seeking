from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

nursing_homes = [
    {"id": 1, "name": "Sunnyvale Nursing Home", "city": "Sydney", "state": "NSW", "recruitmentInfo": "Hiring nurses and caregivers."},
    {"id": 2, "name": "Green Meadows Care", "city": "Melbourne", "state": "VIC", "recruitmentInfo": "Looking for physical therapists."},
]

@app.route('/nursing-homes', methods=['GET'])

def get_nursing_homes():
    return jsonify(nursing_homes)

if __name__ == '__main__':
    app.run(debug=True)

