# db.py
from flask_sqlalchemy import SQLAlchemy

# Just create the 'db' object.
# We will attach it to our Flask app in the 'app.py' file.
db = SQLAlchemy()