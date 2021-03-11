![header image](/images/readme_banner.jpg "Kleenex Beer Bottles")

# Flashback 
### A Roku App

[Link to Api Documentation](api-docs.md)


### Installation / Local Setup
*Please install both api and client side to use this application*

**API Server Installation**
1. A MySql server needs to be running with a copy of the database located in the `/database` folder.
2. Type `npm install` to install the dependencies.
3. You will need to create a `.env` file. Simply copy the `sample.env` file and rename it to `.env`.  Make sure the enviroment variables match your MySQL database. Example of the `.env`:
```[env]
PORT=5000
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=root
DB_PORT=8889
```
4. To run the API, type `npm run startdev`.

**Client Side Vue CLI Installation**
1. You need to get a copy of the media in order for the app to run, to get a copy click the `Download All` button on [this](https://drive.google.com/drive/folders/1qTDlS8H8UoGyCwA8r66NuqsoAOAQy7XI?usp=sharing) webpage.  **Important: Please rename this folder to `media`.** This folder contains the posters and the videos for the application.
3. Once the `media` folder is downloaded and renamed, move the folder into the `/client/public` directory.  *Note: This will soon be changed*
4. Next type `cd client` and then `npm install` **OR** type `npm install` if already in the client directory. 
5. Go to `localhost:8080` on your browser and Sign up to use the application.


### Project Description 
This project is a application for roku which a user can browse movies from the past.  Movies that are flashback to the past.  It contains TV Shows, Movies, and Music ranging from 1950-2000.  


### Reason for Application
This project was designed for **Interactive Media Design - Level 4** at **Fanshawe College**

Purpose of this project was to grow knowledge in created web applications that can display videos, and other sort of media.  This project was done with Spencer Mellor and is expected to last until around *April, 2021*


### Authors

- Developer - Nate Grift
- Designer - Spencer Mellor

### Design Prototype

Design Prototype can be viewed here. 
[Prototype](https://xd.adobe.com/view/77a94f5d-50a2-4f31-89f1-19972e8b7ee6-22fa/?fullscreen&hints=off)

### Content

The content itself will not be used for profit, only for education purposes.  

##### NOTE: Project and Content are for education use only.  No profit will come from this project

### License

MIT


## API Documentation

Api docs are located here:
[Api Documentation](api-docs.md)



