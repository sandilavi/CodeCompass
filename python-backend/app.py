from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

beginner_correct = 0
intermediate_correct = 0
advanced_correct = 0

@app.route('/send_quiz_data', methods=['POST'])
def send_quiz_data():
    try:
        data = request.json

        total_correct = data.get('totalCorrect', 0)

        # Update correct answers for each proficiency level
        update_correct_answers(data)

        # Predict proficiency level based on quiz data
        proficiency_level = predict_proficiency(total_correct)

        # Return predicted proficiency level as JSON response
        return jsonify({'proficiencyLevel': proficiency_level})

    except Exception as e:
        return jsonify({'error': str(e)})

def update_correct_answers(data):
    global beginner_correct, intermediate_correct, advanced_correct

    beginner_correct += data.get('beginnerCorrect', 0)
    intermediate_correct += data.get('intermediateCorrect', 0)
    advanced_correct += data.get('advancedCorrect', 0)

def predict_proficiency(total_correct):
    # Placeholder logic (replace with your ML model prediction)
    proficiency_levels = ['Beginner', 'Intermediate', 'Advanced']
    if total_correct <= 4:
        return proficiency_levels[0]
    elif total_correct <= 7:
        return proficiency_levels[1]
    else:
        return proficiency_levels[2]

if __name__ == '__main__':
    app.run(debug=True)
