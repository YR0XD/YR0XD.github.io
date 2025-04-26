from flask import Flask, render_template, request, send_file
from werkzeug.utils import secure_filename
import os
import joblib
from fpdf import FPDF

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
RESULT_FOLDER = 'results'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULT_FOLDER, exist_ok=True)

model = joblib.load('C://Users/ACER/Desktop/mahan goosfand/site/parkinsons-model.pkl')  # مسیر مدل آموزش‌دیده

@app.route('/')
def index():
    return render_template('res.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'audio' not in request.files:
        return 'No file part'
    
    file = request.files['audio']
    if file.filename == '':
        return 'No selected file'

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # فرضی: استخراج ویژگی از صدا و پیش‌بینی
    features = extract_features(filepath) # تابعی که باید خودت بنویسی
    prediction = model.predict([features])[0]

    # ساخت فایل PDF
    pdf_path = os.path.join(RESULT_FOLDER, f"{filename}.pdf")
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=14)
    pdf.cell(200, 10, txt="Parkinson's Detection Result", ln=True, align='C')
    pdf.ln(10)
    pdf.multi_cell(0, 10, f"Prediction Result: {prediction}")
    pdf.output(pdf_path)

    return send_file(pdf_path, as_attachment=False)

def extract_features(filepath):
    # TODO: صدای آپلودی رو تبدیل به ویژگی قابل استفاده توسط مدل کن
    # به عنوان مثال MFCC، یا هر چیزی که در آموزش استفاده کردی
    return [0.1, 0.2, 0.3]  # صرفاً یک نمونه فرضی

if __name__ == '__main__':
    app.run(debug=True)