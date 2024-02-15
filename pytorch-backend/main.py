# Importing relavant libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# Load the dataset
df = pd.read_csv('sample_dataset.csv')

# Handle the missing values (if had)
df.dropna(inplace=True)

# Encode categorical variables
label_encoder = LabelEncoder()
df['Quiz_Level_encoded'] = label_encoder.fit_transform(df['Quiz_Level'])
df['Topic_encoded'] = label_encoder.fit_transform(df['Topic'])
df['Correct_Answer_encoded'] = label_encoder.fit_transform(df['Correct_Answer'])

# Split data into features and labels
X = df[['Quiz_Level_encoded', 'Topic_encoded', 'Question_ID', 'Correct_Answer_encoded']]
y = df['Outcome']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Importing relavant libraries
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Initialize the logistic regression model
model = LogisticRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
 