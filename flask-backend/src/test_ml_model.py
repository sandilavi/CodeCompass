import pandas as pd
import joblib, json

# Load the trained model
model = joblib.load('ml_model.joblib')

# Define data as a Python dictionary
data = {"Total_Correct_Answers": 15, "Beginner_Correct_Answers": 5, "Intermediate_Correct_Answers": 5, "Advanced_Correct_Answers": 5}

# Convert the Python dictionary to JSON
data_json = json.dumps([data])

# Load the JSON string into a Python object (list of dictionaries)
X_new_data = json.loads(data_json)

# Convert the Python object to a DataFrame
X_new_df = pd.DataFrame(X_new_data)

# Select the relavant features
selected_features = ['Total_Correct_Answers', 'Beginner_Correct_Answers', 'Intermediate_Correct_Answers', 'Advanced_Correct_Answers']
X_new_selected = X_new_df[selected_features]

# Convert DataFrame to numpy array
X_new_array = X_new_selected.values

# Use X_new_array for prediction
predictions = model.predict(X_new_array)

# Define a dictionary to map the predicted labels to user levels
level_mapping = {1: 'Beginner', 3: 'Intermediate', 0: 'Advanced', 2: 'Expert'}

# Convert the predictions to user levels using the mapping
user_level = [level_mapping[prediction] for prediction in predictions]
print("User Level:", user_level)
