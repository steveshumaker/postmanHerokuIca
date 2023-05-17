

// fetch('/users')
// .then(response => response.json())
// .then(console.log);


// GET at specific index
fetch('/users/0')
.then(response => response.json())
.then(console.log);


let newUser = {
    name: 'Charlie',
    role: 'super admin'
}

// POST
fetch('/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
        'Content-Type': 'application/json'
    }
})
  .then(() => fetch('/users'))
  .then(getResponse => getResponse.json())
  .then(console.log);

  // PUT

  let update = {
    name: 'Anne',
    role: 'user'
  }

  fetch('/users/0', {
    method: 'PUT',
    body: JSON.stringify(update),
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then(() => fetch('/users'))
  .then(getResponse => getResponse.json())
  .then(updatedUsers => {
    console.log('Updated: ', updatedUsers)
  });

  // DELETE
  fetch('/users/1', {method: 'DELETE'})
  .then(deletedResponse => deletedResponse.json())
  .then(deletedUser => {
    console.log('DELETED: ', deletedUser);
  });