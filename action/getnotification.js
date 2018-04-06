
/*get  Notification 

users - student, teacher 

Story - Teacher Notifies student - 

one to many relationship

one teacher mail in req.json and one or multiple student mail in req.json 

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
    var teach = req.body.teacher;
    var notification = req.body.notification;
    console.log(teach)
    console.log(notification)
    if (!teach || !notification) {
        res.status(400);
        return res.send({ error: true, message: 'Empty staff or student email!' });
    }

    let students = notification.split(" ");
    var list_students = [];
    for(var i=2; i<students.length; i++) {
         var student = [students[i].substring(1,students[i].length)];
         list_students.push(student);
    }
     console.log(list_students)
     var recepients = [];

    con.query("select distinct stud_email from class where suspended = 0 and (staff_email = ? or stud_email in (?))",[teach, list_students], function(error, results) {
        if(error) throw error;
    
        for(var i=0; i<results.length; i++) {
            recepients.push(results[i].stud_email);
        }
         console.log(recepients)
        var recepient_list = {
            recepients : recepients
        }
        var count=recepients.length;
        console.log(recepient_list.recepients.length)
        res.contentType('application/json');
        if(recepient_list.recepients.length > 0){
            return res.status(200).send({error: false, data: recepient_list, message:"Successfully retrieved!",count:count});
        }
        else
        {
            return res.status(200).send({error: true , message: 'No records found!'});
        }
    });
       
    
});

module.exports.router = router;