const express = require('express');

const app = express();

app.use("/",(req ,res) => {
    res.send('Hello from Express!')
})

app.use("/test", (req ,res) => {
    res.send('Welcome to test page!')
})


app.use("/hello",(req ,res) => {
    res.send('Hello Bala!')
})


app.listen(5000, ()=>{
    console.log('server is running on port 3000...')
})

