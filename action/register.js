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
    if(!req.body.teacher || !req.body.students) {
        return res.status(400).json({ error: true, message: "Empty Request"});
    }


    for(var index=0;index<req.body.students.length;index++){

      if(validator.validate(req.body.students[index]) && validator.validate(req.body.teacher)){
        var student = [req.body.teacher,req.body.students[index]];
        students.push(student);
    }

    else
    {
          return res.status(400).json({error: true, message: "wrong email format"});
            
    }
}
    console.log(students);
   
  var count=0;
  var query= "INSERT INTO class (staff_email,stud_email) VALUES ?";
  db.query(query, [students] , function (error, results) {

            try {
            if(error){
                console.log(error)
                return res.status(400).json({error: true, message: "Duplicate Entry"});
               
            }
            else
            {
                console.log(++count)
                return res.status(200).json({error: false, message: "Students successfully added!"});
            }
          }catch (error) {
                console.log(error.message);
                res.status(400).json({error: true, message: "Duplicate Entry"});
            }
            
        

});

});


module.exports.router = router;