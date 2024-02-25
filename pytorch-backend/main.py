import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.feature_selection import RFE

# Converts csv file into a dataframe and stored it as df
df = pd.read_csv('sample_dataset.csv')

# Handle the missing values
df.dropna(inplace=True)

# Create an object from LabelEncoder class
label_encoder = LabelEncoder()

# Encode non-numerical columns to numerical values
df['Proficiency_Level'] = label_encoder.fit_transform(df['Proficiency_Level'])

# Split features and target variable
X = df.drop(columns=['Proficiency_Level']) # X contains all the columns in df except Proficiency_Level
y = df['Proficiency_Level'] # y which includes only the Proficiency_Level column

# Split train data as 75% and test data as 25%
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=2)

# Feature scaling to standardize the range of independent variables
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize logistic regression model
model = LogisticRegression()

# Initialize RFE with logistic regression model
rfe = RFE(model, n_features_to_select=2)  # Select top 2 features

# Fit RFE to the training data
rfe.fit(X_train_scaled, y_train)
print(y_test)

# Get selected features
selected_features = X_train.columns[rfe.support_]
print("Selected Features:", selected_features)

# Train the model with selected features
model.fit(X_train_scaled[:, rfe.support_], y_train)

# Predict on the test set
y_pred = model.predict(X_test_scaled[:, rfe.support_])

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f'Test Accuracy: {accuracy * 100:.2f}%')
