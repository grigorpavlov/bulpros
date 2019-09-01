# bulpros

React application with MongDB and Mongoose

I. Frontend side

1. Install nodejs or check if it already installed:
node -v
2. Create React application (in this case called frontend):
npx create-react-app frontend
3. Enter the project folder frontend and start React App:
npm start
4. Load bootstrap to the project:
npm install bootstrap
5. Load React Router:
npm install react-router-dom
6. Componenet for different views are stored under newlly created folder components:
- users-list.component.js
- create-user.component.js
- modify-user.component.js
- delete-user.component.js
7. Used react-bootstrap-table to dispaly columns and search box - http://allenfang.github.io/react-bootstrap-table/index.html
npm install react-bootstrap-table --save

II. Backend side

1. Working directory - backend
2. Init NPM:
npm init -y
3. Install Exspress - web framework for node:
npm install exspress
4. Install body-parser - parse incoming request bodies in a middleware before your handlers, available under the req.body property:
npm install body-parser
5. Install cors - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options:
npm install cors
6. Install mongoose - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment:
npm install mongoose
7. Make sure it is installed nodemon - server - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected:
npm install nodemon or nodemon -v
8. Create file server.js
9. To start the created file run:
nodemon server
10. Install MongoDB for Windows10 from the official site 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
11. Create database folder:
C:/data/db
12. In order to run mongod (to start MongoDB) and mongo (to create MongoDB database) under GitBash were created alias in .bash_profile
alias mongod="/c/Program\ files/MongoDB/Server/4.2/bin/mongod.exe"
alias mongo="/c/Program\ Files/MongoDB/Server/4.2/bin/mongo.exe"
run mongod
run mongo
13. Select/Create new database called - users
use users
14. After MongoDB is created use mongoose to configure server.js to connect to it. By using Mongoose MongoDB database is accessed in an object-oriented way
15. Create Mongoose schema users.schema.js
16. Test the connections by using Postman (used port 4000 for MongoDB):
- localhost:4000/users - GET all users;
- localhost:4000/users/create - POST new user;
- localhost:4000/users/5d6a3b222010303e7823c8cc - GET specific user by ID;
- localhost:4000/users/modify/5d6a3b222010303e7823c8cc - POST to modify specific user by ID;
- localhost:4000/users/delete/5d6a3b972010303e7823c8 - DELETE specific user by ID;

III. Frontend and Backend
1. Used Axios to send request to the Backend
npm install axios

For more details check the commited files in folder frontend and backend

![Alt text](users_list.PNG?raw=true "Users List")


