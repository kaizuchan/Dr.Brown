from PIL import Image
from PIL import ImageFile
import keras
import sys, os
import os, glob
import numpy as np
from keras.models import load_model

# IOError: image file is truncated (0 bytes not processed)回避のため
ImageFile.LOAD_TRUNCATED_IMAGES = True

imsize = (64, 64)

files = os.listdir("./img")
img_name = "./img/"+files[0]

testpic     = img_name # 画像ファイルのディレクトリ
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
print(prd)
prelabel = np.argmax(prd, axis=1)
if prelabel == 0:
    print(100) # bananaの場合
elif prelabel == 1:
    print(70) # bisyaの場合
elif prelabel == 2:
    print(80) # hyoroの場合
elif prelabel == 3:
    print(90) # koroの場合
    
os.remove(img_name)