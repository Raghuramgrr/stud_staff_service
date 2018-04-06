var app = require('../app');
var chai = require("chai");
var request = require("supertest");
var expect = chai.expect;

describe('Get commonstudents', function() {
    describe('Give 2 staff_ids and get commonstudents', () => {
        var body = {
            "teachers":
                [
                    "teacherken1@example.com","teacherken12@example.com"
                ]
        };

    it('get all commonstudents', (done) => {

        request(app).post('/api/commonstudents').send(body)
        .end(function(err, res) {
            console.log(res.body.students);
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Successfully retrieved!');
            expect(res.body.error).to.equal(false);
            done();
        });
  });
});


    describe('Give 1 staff_id and get students of that staff', () => {
        var body = {
            "teachers":
                [
                    "teacherken1@example.com",
                ]
        };

    it('get all students', (done) => {
        request(app).post('/api/commonstudents').send(body)
        .end(function(err, res) {
            console.log(res.body.students);
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Successfully retrieved!');
            expect(res.body.error).to.equal(false);
            done();
        });
  });
});

    describe('check staff-Email-ids not in db', () => {
        var body = {
            "teachers":
                [
                    "abc@gmail.com",
                    "bce@gmail.com"
                ]
        };
    it('No common students found', (done) => {
        request(app).post('/api/commonstudents').send(body)
        .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error).to.equal(true);
            expect(res.body.message).to.equal('No records found!');
            done();
        });
    });
  });
});