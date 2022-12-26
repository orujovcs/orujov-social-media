const express = require('express');
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
    if(!err) {
      console.log('SUCCESS')
    } else {
      console.error('error',err)
    }
});
function getAllUsers(){
    connection.query('SELECT * FROM users;', (err, data) => {
        if (err) {
            console.error("Error: ", err);
        } else {
            // res.status(200).json(data);
            console.log(data)
        }
    });
}
// app.get('/search', cors(corsOptions), (req, res) => {
//     const { inputValue, country, composition, quality, fromPrice, toPrice, fromYear, toYear} = req.query;

//     let dbSearch = `SELECT * FROM coins WHERE TRUE`

//     if (inputValue) {
//         dbSearch += ` AND about_info LIKE '%${inputValue}%'`
//     }
//     if (country) {
//         dbSearch += ` AND country='${country}'`
//     }
//     if (composition) {
//         dbSearch += ` AND composition='${composition}'`
//     }
//     if (quality) {
//         dbSearch += ` AND quality='${quality}'`
//     }
//     if (fromPrice) {
//         dbSearch += ` AND price >= ${+fromPrice}`
//     }
//     if (toPrice) {
//         dbSearch += ` AND price <= ${+toPrice}`
//     }
//     if (fromYear) {
//         dbSearch += ` AND year_of_issue >= ${+fromYear}`
//     }
//     if (toYear) {
//         dbSearch += ` AND year_of_issue <= ${+toYear}`
//     }

//         connection.query(
//             `${dbSearch};`, (err, data) => {
//             if (err) {
//                 console.error("Error: ", err);
//             } else {
//                 res.status(200).json(data);
//             }
//         });
// });

// app.get('/category/:id', cors(corsOptions), (req, res) => {
//     connection.query(`SELECT * FROM coins WHERE category_id=${+req.params.id};`, (err, data) => {
//       if (err) {
//           console.error("Error: ", err);
//       } else {
//         res.status(200).json(data);
//       }
//     });
// });

// app.get('/list/:id', cors(corsOptions), (req, res) => {
//   connection.query(`SELECT * FROM coins WHERE id=${+req.params.id};`, (err, data) => {
//     if (err) {
//         console.error("Error: ", err);
//     } else {
//         res.status(200).json(data);
//     }
//   });
// });

app.listen(5000, function () {
    console.log(`App listening on port 5000!`);
});