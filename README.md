# Mini Message Board

This is a simple CRUD app that allows the user to create, update and delete messages.

**Link to project:** https://mini-message-board-vzmars.herokuapp.com/

![alt text](https://i.imgur.com/1eMqAm0.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, EJS, MongoDB

Users can create new messages which are then stored on MongoDB. They are also able to update and delete messages that are stored on MongoDB. When first loading the app we send over a request to the database and the database sends back all the messages to be rendered with EJS. The forms that allow the user to create/update a message are also rendered with EJS.

## Optimizations:

I would like to go back to this project and add a login feature that will prevent users from updating or deleting messages that they did not create.

## Lessons Learned:

This project helped me learn CRUD and how to work with the MongoDB database. I was also able to learn a bit about Mongoose with this project. I was also introduced to the templating language EJS which allowed me to generate HTML with JavaScript. I also learned about the method-override middleware that allowed me to make PUT and DELETE requests from the browser.

## More Projects:

Take a look at these other projects that I have in my portfolio:

**Straw Hat Pirates API:** https://github.com/vzMars/straw-hat-pirates-api

**Weather App:** https://github.com/vzMars/weather-app

**TodoList:** https://github.com/vzMars/todo-list
