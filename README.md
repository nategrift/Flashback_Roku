![header image](/images/readme_banner.jpg "Kleenex Beer Bottles")

# Flashback 
### A Roku App

### To use
To use the application you need to create a .env file with the following format
```[env]

```

PLEASE NOTE: ***Still in Development***

This project is a application for roku which shows movies from the past.  Movies that are flashback to the past.  It contains TV Shows, Movies, and Music from prior to the 1990's.  


### Reason for Application
This project was designed for **Interactive Media Design - Level 3** at **Fanshawe College**

Purpose of this project was to grow knowledge in created web applications that can display videos, and other sort of media.  This project was done with Spencer Mellor and is expected to last until around *April, 2021*


### Authors

- Developer - Nate Grift
- Designer - Spencer Mellor

### Current Prototype

Current Prototype can be viewed here. 
[Prototype](https://xd.adobe.com/view/77a94f5d-50a2-4f31-89f1-19972e8b7ee6-22fa/?fullscreen&hints=off)

### Content

The content of this project will be coming from an api we will be creating in the spring of 2021.  The content itself will not be used for profit and only for education purposes only.  

##### NOTE: Project and Content are for education use only.  No profit will come from this project

### License

MIT

### Current Stage of Development

The current stage of devleopment is planning and designing phase.  We have not developed anything.  

`Come back soon to see more...`


## API

### Media
*Please note: All media requests require bearer JWT authentication*

#### Get Media
GET `/media`
**Params:**
  - type *(Optional)*
  - range *(Optional range of released dates)*
    - `90` *(Years 1990 - 2000)*
    - `80` *(Years 1980 - 1990)*
    - `70` *(Years 1970 - 1980)*
    - `60` *(Years 1960 - 1970)*
    - `50` *(Years 1950 - 1960)*

#### Get Media types
GET `/media/types`

#### Get One Media by ID
GET `/media/<media_id>`

#### Like Media
POST `/media/<media_id>/like-media`

#### UnLike Media
DELETE `/media/<media_id>/like-media`

#### Comment on Media
POST `/media/<media_id>/comment`

**Params (BODY):**
  - copy *(comment text)*

#### Comment on Media
Delete `/media/<media_id>/comment/<comment_id>`



### Accounts

#### Create Account
POST `/auth/create-account`

**Params (BODY):**
  - email 
  - password 
  - username 

#### login
POST `/auth/login`

**Params (BODY):**
  - password 
  - username 


***Please note: All requests below this line require require bearer JWT authentication*


#### Get Profiles
GET `/profiles`

#### Select Profile
GET `/profiles`
  **Params:**
  - profile_id 
  - pin *(if it is admin account)* 



