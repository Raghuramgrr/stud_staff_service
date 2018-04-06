var app = require('../app');
var chai = require("chai");
var request = require("supertest");
var expect = chai.expect;


describe('Register teacher Test', function() {
    describe('Register teacher', () => {
        var body = {
            "teacher": "teacherken24@example.com",
            "students":
                [
                    "studentjon12@example.com"
                ]
        };
        it('Register students with valid mail id', (done) => {
        request(app)
        .post('/api/register')
        .send(body)
        .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Students successfully added!');
            expect(res.body.error).to.equal(false);
            done();
        });
    });
});
});


describe('Duplicate-Email scenario', function() {
    describe('Register exisitng staff Id', () => {
        var body = {
            "teacher": "teacherken10@example.com",
            "students":
                [
                    "studentjon10@example.com"
                ]
        };

        it('should not register staff who is already registered', (done) => {
        request(app)
        .post('/api/register')
        .send(body)
        .end(function(err, res) {

            console.log(res.body)
            expect(res.statusCode).to.equal(400);
            expect(res.body.error).to.equal(true);
            expect(res.body.message).to.equal('Duplicate Entry');
            done();
        });
      });
    });
});

describe('invalid-email', function() {
    describe('Email validator-test', () => {
        var body = {
            "teacher": "teacherken@gmail.com",
            "students":
                [
                    "studentjon10_example-com"
                ]
        };

        it('wrong email id format should not be registered', (done) => {
        request(app)
        .post('/api/register')
        .send(body)
        .end(function(err, res) {

            console.log(res.body)
            expect(res.statusCode).to.equal(400);
            expect(res.body.error).to.equal(true);
            expect(res.body.message).to.equal('wrong email format');
            done();
        });
      });
    });
});