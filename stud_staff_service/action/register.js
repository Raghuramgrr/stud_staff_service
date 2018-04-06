/*Register student 

users - student, teacher 

Story - Teacher registers student - 

one to many relationship

one teacher mail in req.json and multiple student mail in req.json 

DB - mysql - Db name - studentregister - table name - class 

Author - Raghu 

*/

var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var validator = require("email-validator");


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"studentregister"
  
});
 db.connect();
 

router.post('/', function(req, res) {
    var students = []
    for(var index=0;index<req.body.students.length;index++){
      if(validator.validate(req.body.students[index]) && validator.validate(req.body.teacher)){
        var student = {"stud_email": req.body.students[index], "staff_email": req.body.teacher};
        students.push(student);
    }

    else
    {
          return res.status(400).json({error: true, message: "wrong email format"});
            
    }
}
    console.log(students);
    req.body.students = students;


  db.query("insert into class set ?", students , function (error, results, fields) {
            try {
            if(error){
                return  res.status(400).json({error: true, message: "Duplicate Entry"});
            }
            else
            {
              return res.status(200).json({error: false, message: "Students successfully added!"});
            }
            } catch (error) {
                console.log(error.message);
                res.status(400).json({error: true, message: "Duplicate Entry"});
            }
            
        
});
});


module.exports.router = router;