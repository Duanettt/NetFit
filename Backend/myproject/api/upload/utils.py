import cv2
import pytesseract
import numpy as np

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


def process_image(openCVImage):

    scale_factor = 2

    new_width = int(openCVImage.shape[1] * scale_factor)
    new_height = int(openCVImage.shape[0] * scale_factor)
    new_dimensions = (new_width, new_height)

    # Resizing image
    resized_image = cv2.resize(openCVImage, new_dimensions, interpolation=cv2.INTER_LINEAR)
    # Blurring Image
    blurred_image = cv2.GaussianBlur(resized_image, (5, 5), 0)
    # Now convert some of our image to text.
    text = pytesseract.image_to_string(blurred_image, lang='eng')

    print(text)

    return text
