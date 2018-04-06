# Student,Staff Backend
A set of services for a staff to manage his students 
### Technology used

* Nodejs
* Mysql
* AWS EC-2Deployment 
* Tests - CHAI,MOCHA

### Installation and Configuration

* Persistence: MySQL database
* DB name: studentregister
* user name: "root"
* password: "root"

### Steps to run the app:
1. Clone the repository into a folder
2. npm install .
3. npm start.

* The application is now running in EC2-Instance , Can just give requests to test the application.

* Note: Please run app on port 3000.
	
### Tests for all DB operations are in tests source folder (Using mocha,chai)

### Screen shots from postman  

### 1. register student 

![alt text](/screen-shots/register.png "register students")

### 1.1 Duplicate registration  

![alt text](/screen-shots/duplicate.png "register students")

### 1.3 Wrong Email format


![alt text](/screen-shots/invalid-email.png "Invalid-email")


### 2. Get common student -Multi Teachers

![alt text](/screen-shots/common1.png "Get common students")


### 2.1 Get common student-Single Teacher

![alt text](/screen-shots/common2.png "Get common students")


### 2.2 Get common student- zero Records found

![alt text](/screen-shots/no-records.png "Get common students")


### 3. Suspend student 


![alt text](/screen-shots/suspended.png "Title")



### 3.1 Suspend student -Invalid input


![alt text](/screen-shots/suspended.png "Title")



### 4.1 Notification student 


![alt text](/screen-shots/retrieve.png "Title")


### 4.2 Notification student - wrong teacher


![alt text](/screen-shots/no_retrieval.png "Title")
