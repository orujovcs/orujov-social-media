const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '200212Ra',
    database : 'social_media'
});

connection.connect((err) => {
    if(err){
        return console.log(err);
    }
    console.log("Success");
});

app.listen(PORT,() =>{
    console.log(`Server starting on port ${PORT}`);
});


app.get('/add/user', (req,res) => {
    res.json(req.query.count);
    console.log(req.query.count);
    let newArr = req.query.count.split(',');
    console.log(newArr);
    connection.query(`
        INSERT INTO users (username, password, firstname, lastname)
        VALUES('${newArr[2]}','${newArr[3]}','${newArr[0]}','${newArr[1]}');`,
        (err,data) => {
            if(err) console.log(err);
            if(!err) console.log(data);
        }
    );
});

app.get('/login', (req,res) => {
    console.log("req :"+req.query.count);
    let newArr = req.query.count.split(',');
    console.log("array : "+newArr);
    try{

        connection.query(`
        SELECT username,password FROM users 
        WHERE username = "${newArr[0]}"`,
        (err,data) => {
            if(err) {
                console.log(err);
                res.json("NO");
            }
            if(!err) console.log(data[0].password);
            if(data[0].password === newArr[1]){
                res.json("Yes");
                connection.query(`
                    INSERT INTO inner_user (username, password)
                    VALUES('${newArr[0]}','${newArr[1]}');`,
                    (err,data) => {
                        if(err) console.log(err);
                    }
                );
            }
            else{res.json("NO")}
        }
        );
    }catch(err){
        console.log(err);
    }
});

app.get('/logout', (req,res) => {
    connection.query(`
        DELETE FROM inner_user;`,
        (err,data) => {
            if(err) console.log(err);
            if(!err) console.log(data);
        }
    );
});

app.get('/get-details', (req,res) => {
    connection.query('SELECT * FROM inner_user ',
    (err,data) => {
        if(err) console.log(err);
        if(!err) console.log(data[0].username + " " + data[0].password);
        un = data[0].username;
        pw = data[0].password;
        connection.query(`SELECT * FROM users 
        WHERE username = "${data[0].username}" AND password = "${data[0].password}"`,
            (err,data) => {
                if(err) console.log(err);
                if(!err) console.log(data);
                res.json(data);
            }
        );
    });
});

app.get('/send-messages', (req,res) => {
    connection.query(`SELECT * FROM inner_user`,
        (err,data) => {
            if(err) console.log(err);
            if(!err) console.log(data[0].username);
            connection.query(`
                INSERT INTO messages (username,message,data_time)
                VALUES("${data[0].username}", "${req.query.count}", now())`,
                (err,data) => {
                    if(err) console.log(err);
                    if(!err) console.log(data);
                }
            );
        }
    );
    connection.query('SELECT * FROM messages ',
    (err,data) => {
        if(err) console.log(err);
        if(!err) console.log(data);
        res.json(data);
    });
});

app.get('/get-messages', (req,res) => {
    connection.query('SELECT * FROM messages ',
    (err,data) => {
        if(err) console.log(err);
        if(!err) console.log(data);
        res.json(data);
    });
});