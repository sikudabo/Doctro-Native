# Doctro-Native

## Welcome
Welcome to the Doctro native client. Doctro is a chatbot that enables patients to ask questions related to covid-19. This can enable patients to gain more insights on covid-19, know if they might be infected, and enables them to gain valuable information that can help protect them and improve their health prior to a visit with a medical professional. Doctro does not replace the advise of a medical professional. This is the client portion of the application that is built for iOS devices. You will also need to clone the repo for the server-side code to run this project. 

## Project setup

1. Clone this repo. In your terminal select a directory and run ```git clone https://github.com/sikudabo/Doctro-Native.git``` Unzip the project.
2. Navigate to the directory the project has been cloned to. Run ```npm i``` to install all of the necessary packages to run this project. Install expo-cli in order to run the project. Install the corresponding expo go application on an iOS device. This can either be an iPhone or iPad.
3. Create a ```.env``` file and add a key called ```EXPO_PUBLIC_API_URL```. Make sure the value of this key is ```http://[your_network_server_ip_on_your_computer]:3018/api/answer-question```. This will be needed in order to connect with the server.
4. Clone the corresponding repo for the server-side code. In another directory run ```git clone https://github.com/sikudabo/Doctro-API.git```. Unzip the project and navigate to the project directory. Run ```npm i``` in the terminal to install the necessary packages. Run ```nodemon index.js``` to start the server. 
5. Navigate back to the ```Doctro-Native``` project. Install expo globally and then run ```npx expo start --no-dev --minifi``` to run this project.
6. Open the Project in the expo go application on your mobile device and begin to ask questions related to Covid-19.
7. You can run ```npx expo start``` to run the project in development mode.


## Video demo



https://github.com/sikudabo/Doctro-Native/assets/32518831/e46dc0f5-ea51-48cd-a3a5-32b47fc11ad0

## Screen shots
![doctro_1](https://github.com/sikudabo/Doctro-Native/assets/32518831/fdb84a00-6f8f-438c-9702-9abacc312096)

![doctro_2](https://github.com/sikudabo/Doctro-Native/assets/32518831/47041762-94b5-498b-ba43-fe86f4fb202c)

![doctro_3](https://github.com/sikudabo/Doctro-Native/assets/32518831/12e0c7f2-be2d-442c-a8f8-73898c328a0b)





![icon](https://github.com/sikudabo/Doctro-Native/assets/32518831/7eabd42c-d1f6-440c-98d0-491649f2be27)



This is the offical native client application for Doctro
