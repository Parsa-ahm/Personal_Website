from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()

model = joblib.load("model.joblib")  # Example model

@app.get("/predict")
def predict(x: float):
    prediction = model.predict(np.array([[x]]))[0]
    return {"prediction": prediction}
