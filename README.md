Use this for the Dataset : https://www.kaggle.com/datasets/iamsouravbanerjee/indian-actor-images-dataset?resource=download-directory&select=Bollywood+Actor+Images<br>

Project Overview :<br>
The Indian Actors Face Classification project is a machine learning-based facial recognition system that identifies Indian actors and actresses from images. The project leverages OpenCV for face detection, Wavelet Transform for feature extraction, and a Support Vector Machine (SVM) classifier to achieve high accuracy. It is integrated with a Flask backend for real-time API-based predictions and a React-based UI for an interactive user experience.<br><br>

Features :<br>
Face Detection – Uses Haar cascades to detect faces and eyes before classification.<br>
Image Preprocessing – Converts images to grayscale and applies Wavelet Transform for better feature extraction.<br>
Machine Learning Models – Trained using SVM, Random Forest, and Logistic Regression, with SVM yielding the best results.<br>
Backend API – Flask-based server for classifying images in real-time.<br>
Frontend Interface – Interactive React UI allowing users to upload images and get classification results.<br>
Optimized for Performance – Uses GridSearchCV for hyperparameter tuning and efficient model selection.<br><br>

Technologies Used :<br>
Python – Machine learning model, backend API<br>
OpenCV – Face and eye detection<br>
Scikit-Learn – Model training and evaluation<br>
PyWavelets – Wavelet transformation for feature extraction<br>
Flask – Backend API for real-time predictions<br>
React & TypeScript – Frontend UI for classification<br>
Git & GitHub – Version control and repository management<br><br>

📁 Project Structure :<br>
Indian Actors Classification/<br>
│── opencv/      &nbsp; &nbsp;&nbsp;              # Haarcascade XML files for face detection<br>
│── Server/         &nbsp;&nbsp;&nbsp;             # Backend (Flask API)<br>
│    ├── server.py      &nbsp;&nbsp;         # Main Flask server<br>
│    ├── util.py         &nbsp;&nbsp;        # Image processing and classification logic<br>
│    ├── wavelet.py        &nbsp;&nbsp;      # Wavelet Transform function<br>
│    ├── class_dictionary.json  &nbsp;&nbsp; # Celebrity-to-class mapping<br>
│    ├── artifacts/             &nbsp;&nbsp; # Trained model & saved files<br>
│── UI/                         &nbsp;&nbsp;&nbsp; # Frontend (React & TypeScript)<br>
│    ├── project/               &nbsp;&nbsp; # React application files<br>
│    ├── src/App.tsx           &nbsp;&nbsp;  # Main frontend logic<br>
│── Model_source_code.ipynb    &nbsp;&nbsp;&nbsp;  # Jupyter Notebook for training & evaluation<br>
│── .gitignore                  &nbsp;&nbsp;&nbsp; # Ignoring unnecessary files (node_modules, datasets)<br>
│── README.md                  &nbsp;&nbsp;&nbsp;  # Project documentation<br><br>


How the Pipeline Works :<br>
Face Detection – The system detects faces and verifies the presence of two eyes using Haar cascades.<br>
Feature Extraction – Converts images to grayscale and applies Wavelet Transform to extract high-frequency features.<br>
Model Training – Uses SVM, Random Forest, and Logistic Regression, selecting the best model via GridSearchCV.<br>
Deployment – The trained model is saved and served via a Flask API.<br>
Frontend Integration – Users can upload images via a React UI, which interacts with the Flask API to display results.<br>

Setup & Installation : <br>
1) Clone Repository : git clone https://github.com/KiritoKazugaya/DS-Classification-model.git<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;    cd DS-Classification-model<br>

2) Setup the Backend : cd Server<br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           pip install -r requirements.txt<br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            python server.py<br>
3) Run the Frontend : cd ../UI/project<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             npm install<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            npm run dev<br><br>

How to use the Application : <br>
Upload an image of an Indian actor/actress.<br>
The system will classify the face and return the predicted name with confidence scores.<br><br>

Future Enhancements :<br>
🔹 Expand dataset for better model generalization<br>
🔹 Optimize model for faster inference time<br>
🔹 Upgrade to deep learning-based CNN models for improved accuracy<br>
🔹 Add multi-face detection & classification<br><br>

References :<br>
Dataset: https://www.kaggle.com/datasets/iamsouravbanerjee/indian-actor-images-dataset<br>
Face Detection (OpenCV Haar Cascades): https://github.com/opencv/opencv/tree/master/data/haarcascades<br>
Wavelet Transform Documentation: https://pywavelets.readthedocs.io/en/latest/<br>
Flask API Development: https://flask.palletsprojects.com/en/2.2.x/<br>
Machine Learning Models (Scikit-Learn): https://scikit-learn.org/stable/<br>
React UI Development: https://reactjs.org/<br>

