import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

# Load the trained model
model = joblib.load('trained_model.joblib')

# Assuming X_new_data is a dictionary
X_new_data = [
    {'Total_Correct_Answers': 0, 'Beginner_Correct_Answers': 0, 'Intermediate_Correct_Answers': 0, 'Advanced_Correct_Answers': 0},
]

# Convert dictionary to DataFrame
X_new_df = pd.DataFrame(X_new_data)

# Label encode User_ID
label_encoder = LabelEncoder()
#X_new_df['User_ID'] = label_encoder.fit_transform(X_new_df['User_ID'])

# Select only the User_ID and Total_Correct_Answers features
selected_features = ['Total_Correct_Answers', 'Beginner_Correct_Answers', 'Intermediate_Correct_Answers', 'Advanced_Correct_Answers']
X_new_selected = X_new_df[selected_features]

# Convert DataFrame to numpy array
X_new_array = X_new_selected.values

# Now you can use X_new_array for prediction
predictions = model.predict(X_new_array)

# Define a dictionary to map the predicted labels to user levels
level_mapping = {1: 'Beginner', 3: 'Intermediate', 0: 'Advanced', 2: 'Expert'}

# Convert the predictions to user levels using the mapping
user_level = [level_mapping[prediction] for prediction in predictions]

print("User Level:", user_level)
