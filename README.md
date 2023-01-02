# Phase4 Project Kitchen Story

## Project Background
Kitchen Story is an e-commerce portal that lets people shop for basic food items on their website.

## Run the application
Download or clone the content of repository. Then follow the instruction given below:

### Setup for frontend
1. Open the folder Frontend_Angular in VsCode.
2. Then Install node.js from https://nodejs.org/en/download/.
3. Then open cmd and paste: npm install -g @angular/cli
4. Then in cmd, paste: npm install
5. After installation, in cmd paste: ng serve --o

### Setup for backend
1. Open Eclipse Ide. import maven project Backend_SpringBoot.
2. Open the Phase4KitchenStoryApplication.java file. Right click and select run as java application.

### Setup for database
1. Install MongoDb from https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.3-signed.msi
2. In Mongodb compass create database "kitchenstory".
3. Inside db kitchenstory create Collections- AdminCred, Orders, Products.
4. In respective collections import the .csv file.

The web application is now ready to use in http://localhost:4200/
