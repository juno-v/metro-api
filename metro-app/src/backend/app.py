from flask import Flask
import requests
import json

app = Flask(__name__)


@app.route('/routes', methods=['GET'])
def api():
    r = requests.get('http://svc.metrotransit.org/NexTrip/Routes?format=json')

    #response = json.dumps(r.text, sort_keys=False, indent=2)
    return r.content
    