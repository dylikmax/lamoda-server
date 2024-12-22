# Lamoda Server
This project represents clothes website shop, where you can see all products from server and filter it by many criterion.
### Techs and libraries:
`HTML` `CSS` `JavaScript` `React` `NodeJS` `Express` `ExpressValidator`

### Database & API
Products generates on server authomaticaly using random strings and numbers. API is written by NodeJS and Express with GET methods to fetch products, multiselects and range filters. I also used Express Validator library to validate queries that user sends.

### Client part
To display all products and filters I used React. All data for displaying fetches in two stages: at first we get all filters and multiselects that allowed for our app and at second stage we get products. For ever filter updates we fetch new products from server.

### UI
UI is very simple and has no overs. All styles was written on CSS.

App view
![App view](https://i.imgur.com/JOL3s8e.png)

### For launching
Write `node server.js` in `./server/` & `npm start` in `./client/` and go to `http://localhost:3000/` address.
