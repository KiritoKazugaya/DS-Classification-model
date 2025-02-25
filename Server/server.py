from flask import Flask, request, jsonify
import os
import util

app = Flask(__name__)

@app.route('/classify_image', methods=['GET', 'POST'])
def classify_image():
    image_data = request.form['image_data']
    response = jsonify(util.classify_image(image_data))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# def classify_image():
#     try:
#         image_data = request.json('image_data',None)
#
#         if not image_data:
#             return jsonify({"error": "No image data provided"})
#
#         response = jsonify(util.classify_image(image_data))
#         return jsonify(response)
#
#     except Exception as e:
#         return jsonify({"error": str(e)})

if __name__ == "__main__":
    print("Starting Python Flask Server For Indian Celebrity Image Classification")
    util.load_saved_artifacts()
    app.run(port=5000)
