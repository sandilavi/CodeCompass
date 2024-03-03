import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

# Load the trained model
model = joblib.load('trained_model.joblib')

# Assuming X_new_data is a dictionary
X_new_data = [
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 1, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 2, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 3, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 4, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 5, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 6, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 7, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 8, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 9, 'Total_Attempted_Questions': 10},
    {'User_ID': 'zsky@gmail.com', 'Total_Correct_Answers': 10, 'Total_Attempted_Questions': 10}
]

# Convert dictionary to DataFrame
X_new_df = pd.DataFrame(X_new_data)

# Label encode User_ID
label_encoder = LabelEncoder()
X_new_df['User_ID'] = label_encoder.fit_transform(X_new_df['User_ID'])

# Select only the User_ID and Total_Correct_Answers features
selected_features = ['User_ID', 'Total_Correct_Answers']
X_new_selected = X_new_df[selected_features]

# Convert DataFrame to numpy array
X_new_array = X_new_selected.values

# Now you can use X_new_array for prediction
predictions = model.predict(X_new_array)

# Define a dictionary to map the predicted labels to user levels
level_mapping = {1: 'Beginner', 2: 'Intermediate', 0: 'Advanced'}

# Convert the predictions to user levels using the mapping
user_levels = [level_mapping[prediction] for prediction in predictions]

print("User Levels:", user_levels)
