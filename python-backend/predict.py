from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('trained_model.joblib')

# Define a route to receive POST requests
@app.route('/predict_proficiency', methods=['POST'])
def predict_proficiency():
    # Get data from the request
    data = request.json
    
    # Convert the received data to a DataFrame
    X_new_df = pd.DataFrame(data)
    
    # Select relevant features
    selected_features = ['Total_Correct_Answers', 'Beginner_Correct_Answers', 'Intermediate_Correct_Answers', 'Advanced_Correct_Answers']
    X_new_selected = X_new_df[selected_features]
    
    # Use X_new_selected for prediction
    predictions = model.predict(X_new_selected)
    
    # Define a dictionary to map the predicted labels to user levels
    level_mapping = {1: 'Beginner', 3: 'Intermediate', 0: 'Advanced', 2: 'Expert'}
    
    # Convert the predictions to user levels using the mapping
    user_level = [level_mapping[prediction] for prediction in predictions]
    
    return jsonify({'User Level': user_level})

if __name__ == '__main__':
    app.run(debug=True)
