const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
  {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
  {id: 2, name: 'Sabila', email: 'sabila@gmail.com'},
  {id: 3, name: 'Nabila', email: 'nabila@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Users Management server is running')
})

app.get('/users', (req, res) => {
  res.send(users)
}) 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})