from flask import Flask

# __name__  checks file name 
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello junomyname"

if __name__ == "main":
  app.run()