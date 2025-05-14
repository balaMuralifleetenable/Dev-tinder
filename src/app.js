const express = require('express');

const app = express();

app.get("/user", (req ,res) => {
    res.send({"name": "John Doe", "age": 30})
})

app.post("/user", (req,res) => {

    res.send('User created successfully!')
})

app.delete("/user", (req,res) => {
    res.send('User deleted successfully!')
})

app.use("/test", (req ,res) => {
    res.send('Welcome to test page!')
})


app.listen(5000, ()=>{ 
    console.log('server is running on port 3000...')
})

