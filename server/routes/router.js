const express = require('express');
const users = require('../data/users.js')
// all routes going to '/user' are going to be routed here
const userRouter = express.Router();

// get ALL users
userRouter.get('/', (req, res) => {
    res.send(users);
    // res.sendStatus(200);
});

// get ONE user
userRouter.get('/:userIndex', (req, res) => {
    let userIndex = req.params.userIndex;
    res.status(200).send(users[userIndex]);
});

// POST a user
userRouter.post('/', (req, res) => {
    users.push(req.body);
    res.sendStatus(201);
});

// PUT
userRouter.put('/:userIndex', (req, res) => {
    let updatedUser = req.body;
    let userIndex = req.params.userIndex;

    users[userIndex] = updatedUser;

    res.sendStatus(204);
});

// DELETE
userRouter.delete('/:userIndex', (req, res) => {
    let userIndex = req.params.userIndex;
   
    let deletedUser = users[userIndex];
    users[userIndex] = undefined;
    // actually deleting from the array
    // users.splice(userIndex, 1);
    
    res.status(200).send(deletedUser);

});

// NOTIONAL PATCH
// app.patch('/users/:userIndex', (req, res) => {
//     if (req.body.status === 'inactive') {
//         deactivateUserByIndex(req.params.userIndex);
//     }
// });


module.exports = userRouter;
