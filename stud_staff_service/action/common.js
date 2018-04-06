/*common student 

users - student, teacher 

Story - Teacher finds common student  

one/two  teacher mail in req.json and one//many student mail in req.json 

DB - mysql - Db name - studentregister - table name - class 

Author - Raghu 

*/

var express = require('express');
var router = express.Router();
var promise = require('promise');

//var db = require('../db_con/db_con')

var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"studentregister"
});

con.connect();

router.post('/', function(req, res) {
  
    var staff_email = req.body.teachers;
    console.log(staff_email);
    
    con.query("select stud_email from class where staff_email in (?) group by stud_email ", [staff_email], function(error, results, fields) {
        if (error) throw error;
        var student_list = [];
        for(var i=0;i<results.length;i++) {
            student_list.push(results[i].stud_email)
        }
        var common  = {
           students: student_list
        }
        res.contentType('application/json');
        if(student_list.length > 0)
        {
            return res.status(200).send({error: false, data: common, message: 'Successfully retrieved!'});
        }
        else
        {
            return res.status(400).send({error: true , message: 'No records found!'});
        }
        
    });
    });

module.exports.router = router;

