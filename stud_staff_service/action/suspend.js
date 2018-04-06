/*suspend student 

users - student, teacher 

Story - Teacher suspends student - 

one to many relationship

one teacher can suspend multiple students

update flag-suspended to 1

DB - mysql - Db name - studentregister - table name - class 

Author - Raghu 

*/

var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"studentregister"
});



router.post('/', function(req, res) {

   let student = req.body.student;
    //if null return invalid respone
    if (!student) {
        res.status(400);
        return res.send({ error: true, message: 'Invalid Request!,Need student_email' });
    }
    console.log(student);
    con.query("update class set suspended = 1 where stud_email=?", student, function(error, results, fields) {
        if(error) throw error;
        //console.log(results.affectedRows);
        if(results.affectedRows > 0){
        res.status(200);
        return res.send({error: false, message: "Student suspended!"});
        }
        else{
            return res.status(200).send({error: true, message: "Student record not found!"});
        }
    });
});

module.exports.router = router;