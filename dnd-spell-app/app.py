# app.py
from flask import Flask, jsonify

app = Flask(__name__)

# Mock spell descriptions
spell_descriptions = {
    'Bless': 'Bless description...',
    'Aid': 'Aid description...',
    # Add more spell descriptions as needed
}

@app.route('/spell/<spell_name>')
def get_spell_description(spell_name):
    description = spell_descriptions.get(spell_name, 'Spell description not found')
    return jsonify(description=description)

if __name__ == '__main__':
    app.run(debug=True)
