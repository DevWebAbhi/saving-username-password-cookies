const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');


const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true,
}

app.use(cors(corsOptions)); 

app.use(cookieParser());

app.use(express.json());

app.post('/api/login', (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        if(!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        if(username != "hemanth" && password != "123456") {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        res.cookie('username', username, {
            httpOnly: true,
            secure: "none",
            maxAge: 5000 // 1 day
        });
        res.cookie('password', password, {
            httpOnly: true,
            secure: "none",
            maxAge: 5000
        });
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
        
    }
})

app.get('/api/check', (req, res) => {
    try {
        const { username, password } = req.cookies;
        console.log(req.cookies)
        return res.status(200).json({ message: "Cookies are set", username, password });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
})



app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});