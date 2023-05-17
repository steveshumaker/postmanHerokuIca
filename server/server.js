const express = require('express');
const app = express();
const PORT = 8000;

let users = [
    {
        name: 'Anne',
        role: 'Admin'
    },
    {
        name: 'Bob',
        role: 'HR'
    }
];

app.use(express.static('server/public'));
app.use(express.json());

// get ALL users
app.get('/users', (req, res) => {
    res.send(users);
    // res.sendStatus(200);
});

// get ONE user
app.get('/users/:userIndex', (req, res) => {
    let userIndex = req.params.userIndex;
    res.status(200).send(users[userIndex]);
});

// POST a user
app.post('/users', (req, res) => {
    users.push(req.body);
    res.sendStatus(201);
});

// PUT
app.put('/users/:userIndex', (req, res) => {
    let updatedUser = req.body;
    let userIndex = req.params.userIndex;

    users[userIndex] = updatedUser;

    res.sendStatus(204);
});

// DELETE
app.delete('/users/:userIndex', (req, res) => {
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

app.listen(PORT, () =>{
    console.log('Running on port ', PORT);
});
