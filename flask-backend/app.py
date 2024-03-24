from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib, json

app = Flask(__name__)
CORS(app)

# Load the trained model
try:
    model = joblib.load('ml_model.joblib')
except FileNotFoundError:
    raise FileNotFoundError("Could not find the ML model file.")

# Define a route for the root URL
@app.route('/')
def home():
    return "Welcome to the Quiz App"

# Define a route to receive POST requests
@app.route('/send_quiz_data', methods=['POST'])
def send_quiz_data():
    try:
        # Get data from the request
        data = request.json
        print("Received data:", data)
        
        # Validate the received data
        if not isinstance(data, dict):
            raise ValueError("Invalid data format. Expected a JSON object.")
        
        # Convert the Python dictionary to JSON
        data_json = json.dumps([data])
        X_new_data = json.loads(data_json)
        X_new_df = pd.DataFrame(X_new_data)
        
        # Select relevant features
        selected_features = ['Total_Correct_Answers', 'Beginner_Correct_Answers', 'Intermediate_Correct_Answers', 'Advanced_Correct_Answers']
        X_new_selected = X_new_df[selected_features]
        
        # Use X_new_selected for prediction
        X_new_array = X_new_selected.values
        predictions = model.predict(X_new_array)
        
        # Define a dictionary to map the predicted labels to user levels
        level_mapping = {1: 'Beginner', 3: 'Intermediate', 0: 'Advanced', 2: 'Expert'}
        
        # Convert the predictions to user levels using the mapping
        user_level = [level_mapping[prediction] for prediction in predictions]
        return jsonify({'User_Level': user_level})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

#if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=8080)
