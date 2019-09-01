const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const userRoutes = express.Router();
const PORT = 4000;

let User = require('./users.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', {
    useNewUrlParser: true,
    useFindAndModify: false});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log('MongoDB connection established succesfully!')
})

//Get all users
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        };
    });
});

//Get one user
userRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        res.json(user);
    });
});

//Create user
userRoutes.route('/create').post(function (req, res) {
    let user = new User(req.body)
    user.save().then(user => {
        res.status(200).json({'user': 'User created successfully!'});
    })
        .catch(err => {
            res.status(400).send('Failed to create new user!')
        });
});

//Modify User
userRoutes.route('/modify/:id').post(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user)
            res.status(404).send('User is not found!')
        else
            user.user_description = req.body.user_description;
            user.user_name = req.body.user_name;
            user.user_password = req.body.user_password;

        user.save().then(user => {
            res.json('User Updated!')
        })
            .catch (err => {
                res.status(400).send('User Update not possible!')
            });
    });
});

//Delete User
userRoutes.route('/delete/:id').delete(function(req, res) {
    User.findOneAndRemove({_id: req.params.id}, function(err) {
        if (err) {
            console.log("Delete Failed!");
            console.log(err);
            return res.status(500).send();
        } else {
            console.log("Deleted successfully")
            return res.status(200).send();
        }

    });
});


app.use('/users', userRoutes)

app.listen(PORT, function() {
    console.log('Surver is running on PORT: ' + PORT)
})