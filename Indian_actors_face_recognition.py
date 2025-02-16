#!/usr/bin/env python
# coding: utf-8

# In[37]:


import numpy as np
import cv2
import matplotlib
from matplotlib import pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')


# In[38]:


img= cv2.imread(r'C:\Users\visha\Downloads\aishwarya_rai.jpg')
img.shape


# In[39]:


plt.imshow(img)


# In[40]:


gray=cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
gray.shape


# In[41]:


gray


# In[42]:


plt.imshow(gray, cmap='gray')


# In[43]:


face_cascade= cv2.CascadeClassifier('D:\DATA SCIENCE PROJECTS\opencv\data\haarcascades\haarcascade_frontalface_default.xml')

eye_cascade= cv2.CascadeClassifier('D:\DATA SCIENCE PROJECTS\opencv\data\haarcascades\haarcascade_eye.xml')

faces= face_cascade.detectMultiScale(gray,1.3,5)
faces


# In[44]:


(x,y,w,h)=faces[0]
x,y,w,h


# In[45]:


face_img = cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
plt.imshow(face_img)


# In[46]:


cv2.destroyAllWindows()
for (x, y, w, h) in faces:
    face_img = cv2.rectangle(img, (x, y), (x + w, y + h), (255, 0, 0), 2)
    roi_gray = gray[y:y + h, x:x + w]
    roi_color = face_img[y:y + h, x:x + w]
    
    eyes = eye_cascade.detectMultiScale(roi_gray)
    for (ex, ey, ew, eh) in eyes:
        cv2.rectangle(roi_color, (ex, ey), (ex + ew, ey + eh), (0, 255, 0), 2)

plt.figure()
plt.imshow(face_img, cmap='gray')
plt.show()


# In[47]:


get_ipython().run_line_magic('matplotlib', 'inline')
plt.imshow(roi_color,cmap='gray')


# In[48]:


def get_cropped_image_if_2_eyes(image_path):
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    
    for (x, y, w, h) in faces:
        roi_gray = gray[y:y + h, x:x + w]
        roi_color = img[y:y + h, x:x + w]
        
        eyes = eye_cascade.detectMultiScale(roi_gray)
        if len(eyes) >= 2:
            return roi_color


# In[49]:


original_image=cv2.imread(r'C:\Users\visha\Downloads\aishwarya_rai.jpg')
plt.imshow(original_image)


# In[50]:


cropped_image=get_cropped_image_if_2_eyes(r'C:\Users\visha\Downloads\aishwarya_rai.jpg')
plt.imshow(cropped_image)


# In[51]:


org_image_obstructed=cv2.imread(r'C:\Users\visha\Downloads\aishwarya_rai2.jpg')
plt.imshow(org_image_obstructed)


# In[52]:


cropped_image_no_2_eyes=get_cropped_image_if_2_eyes(r'C:\Users\visha\Downloads\aishwarya_rai2.jpg')
cropped_image_no_2_eyes


# In[53]:


path_to_data=r"C:\Users\visha\Downloads\Bollywood Actor Images\Bollywood Actor Images"
path_to_cr_data=r"C:\Users\visha\Downloads\Bollywood Actor Images\cropped"


# In[54]:


import os
img_dirs=[]
for entry in os.scandir(path_to_data):
    if entry.is_dir():
        img_dirs.append(entry.path)


# In[55]:


img_dirs


# In[56]:


import shutil
if os.path.exists(path_to_cr_data):
    shutil.rmtree(path_to_cr_data)
os.mkdir(path_to_cr_data)


# In[59]:


cropped_image_dirs  = []
celebrity_file_names_dict = {}
for img_dir in img_dirs:
    count=1
    celebrity_name =  img_dir.split('\\')[-1]
    print(celebrity_name)
    for entry in os.scandir(img_dir):
        roi_color= get_cropped_image_if_2_eyes(entry.path)
        if roi_color is not None:
            cropped_folder = path_to_cr_data + "\\" + celebrity_name
            print(cropped_folder)
            if not os.path.exists(cropped_folder):
                os.makedirs(cropped_folder)
                cropped_image_dirs.append(cropped_folder)
                print("Generating cropped images in folder :", cropped_image)
            cropped_file_name= celebrity_name+ str(count)+".png"
            print(cropped_file_name)
            cropped_file_path = cropped_folder +"/"+cropped_file_name
            cv2.imwrite(cropped_file_path, roi_color)
            celebrity_file_names_dict[celebrity_name].append(cropped_file_path)
            count += 1


# In[60]:


#import os
#import cv2

cropped_image_dirs = []
celebrity_file_names_dict = {}

for img_dir in img_dirs:
    count = 1
    celebrity_name = img_dir.split('\\')[-1]  # Extract celebrity name
    print(celebrity_name)

    # Ensure the dictionary has an entry for the celebrity
    if celebrity_name not in celebrity_file_names_dict:
        celebrity_file_names_dict[celebrity_name] = []  # Initialize empty list

    for entry in os.scandir(img_dir):
        roi_color = get_cropped_image_if_2_eyes(entry.path)
        if roi_color is not None:
            cropped_folder = path_to_cr_data + "\\" + celebrity_name
            print(cropped_folder)
            
            if not os.path.exists(cropped_folder):
                os.makedirs(cropped_folder)
                cropped_image_dirs.append(cropped_folder)
                print("Generating cropped images in folder:", cropped_folder)

            cropped_file_name = celebrity_name + str(count) + ".png"
            print(cropped_file_name)
            cropped_file_path = cropped_folder + "/" + cropped_file_name
            
            cv2.imwrite(cropped_file_path, roi_color)

            # Append the cropped file path to the dictionary
            celebrity_file_names_dict[celebrity_name].append(cropped_file_path)
            count += 1


# In[61]:


celebrity_file_names_dict


# In[62]:


import numpy as np
import pywt
import cv2

def w2d(img, mode='haar', level=1):
    imArray = img
    
    # Convert to grayscale
    imArray = cv2.cvtColor(imArray, cv2.COLOR_RGB2GRAY)
    
    # Convert to float
    imArray = np.float32(imArray)
    imArray /= 255
    
    # Compute wavelet coefficients
    coeffs = pywt.wavedec2(imArray, mode, level=level)
    
    # Process coefficients
    coeffs_H = list(coeffs)
    coeffs_H[0] *= 0  # Set approximation coefficients to zero
    
    # Reconstruction
    imArray_H = pywt.waverec2(coeffs_H, mode)
    imArray_H *= 255
    imArray_H = np.uint8(imArray_H)

    return imArray_H


# In[66]:


im_har=w2d(cropped_image,'db1',5)
plt.imshow(im_har,cmap='gray')


# In[ ]:


#The input to our classifier (w2d) will now be a raw image and then stacked on by the wavelet transformed image. 


# In[68]:


class_dict={}
count=0
for celebrity_name in celebrity_file_names_dict.keys():
    class_dict[celebrity_name]=count
    count+=1
class_dict


# In[78]:


x=[]
y=[]

for celebrity_name, training_files in celebrity_file_names_dict.items():
    for training_image in training_files:
        img=cv2.imread(training_image)
        if img is None:
            continue
        scalled_raw_img= cv2.resize(img,(32,32))
        img_har= w2d(img,'db1',5)
        scalled_img_har= cv2.resize(img_har, (32,32))
        combined_img=np.vstack((scalled_raw_img.reshape(32*32*3,1),scalled_img_har.reshape(32*32,1)))
        x.append(combined_img)
        y.append(celebrity_name)


# In[74]:


len(x[0]),y[0]


# In[80]:


x=np.array(x).reshape(len(x),4096).astype(float)
x.shape


# In[81]:


x[0]


# In[ ]:




