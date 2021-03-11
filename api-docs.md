## API Documentation

### Media
*Please note: All media requests require bearer JWT authentication*

#### Get Media
GET `/media`
**Params:**
  - type *(Optional)*
    - Options: [`movie`,`audio`,`tvshow`]
  - rangemin *(Optional, but nees to be with rangemax and types)*
  - rangemax *(Optional, but nees to be with rangemin and types)*


#### Get Media types
GET `/media/types`

#### Get One Media by ID
GET `/media/<media_id>`

#### Like Media
POST `/media/<media_id>/like-media`

#### UnLike Media
DELETE `/media/<media_id>/like-media`

#### ~~Comment on Media~~ (Not Created yet)
POST `/media/<media_id>/comment`

**Params (BODY):**
  - copy *(comment text)*

#### ~~Delete Comment on Media~~ (Not Created yet)
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
GET `/profiles/:profile_id `
  **Params:**
  - pin *(if it is admin account)* 