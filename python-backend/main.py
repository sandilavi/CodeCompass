import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.feature_selection import RFE

# Converts csv file into a dataframe and stored it as df
df = pd.read_csv('dataset.csv')

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

# Initialize logistic regression model
model = LogisticRegression()

# Initialize RFE with LR
rfe = RFE(model, n_features_to_select=4)

# Apply RFE to the training data and target lables
rfe.fit(X_train, y_train)

# Select top features that need to train the ML model
selected_features = X_train.columns[rfe.support_]
print("Selected Features:", selected_features)

# Train the ML model with selected features and target variable
model.fit(X_train[selected_features], y_train)
print(X_test[selected_features])

# Hyperparameter tuning
param_grid = {'C': [0.001, 0.01, 0.1, 1, 10, 100]}
grid_search = GridSearchCV(estimator=LogisticRegression(), param_grid=param_grid, cv=2)
grid_search.fit(X_train[selected_features], y_train)
print("Best Parameters:", grid_search.best_params_)

# Predict on the test set
y_pred = grid_search.predict(X_test[selected_features])

# Calculate evaluation metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='macro', zero_division=1)
recall = recall_score(y_test, y_pred, average='macro', zero_division=1)
f1 = f1_score(y_test, y_pred, average='macro')

print(f'Test Accuracy: {accuracy * 100:.2f}%')
print(f'Precision: {precision}')
print(f'Recall: {recall}')
print(f'F1 Score: {f1}')

# Save the trained model to a fileimport joblib
#import joblib
#joblib.dump(model, 'ml_model.joblib')
