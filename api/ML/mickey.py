from PIL import Image
from PIL import ImageFile
# import keras
# import sys, os
# import os, glob
import numpy as np
from keras.models import load_model

# IOError: image file is truncated (0 bytes not processed)回避のため
ImageFile.LOAD_TRUNCATED_IMAGES = True

imsize = (64, 64)

testpic     = "./banana.jpg" # 画像ファイルのディレクトリ
keras_param = "./cnn.h5"

def load_image(path):
    img = Image.open(path)
    img = img.convert('RGB')
    img = img.resize(imsize)
    img = np.asarray(img)
    img = img / 255.0
    return img

model = load_model(keras_param)
img = load_image(testpic)
prd = model.predict(np.array([img]))
# print(prd) 精度の表示
prelabel = np.argmax(prd, axis=1)
if prelabel == 0:
    print(100)
elif prelabel == 1:
    print(70)
elif prelabel == 2:
    print(80)
elif prelabel == 3:
    print(90)