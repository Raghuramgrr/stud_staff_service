/*Author: Diva
Date Created: 20/02/18
Description: unit test for suspending notifications to a student
Modified By:
Modified Date:
*/

var app = require('../app');
var chai = require("chai");
var request = require("supertest");
var expect = chai.expect;



describe('Suspend Notifications', function() {
    describe('Suspend a student from receiving notifications', () => {
        var body = {
            "student":"studentjon12@example.com"
        };

    it('should send success on suspending the notifications', (done) => {

        request(app).post('/api/suspend').send(body)
        .end(function(err, res) {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Student suspended!');
            expect(res.body.error).to.equal(false);
            done();
        });
    });
});


    describe('Try without student email', () => {
        var body = {
        };

    it('Throw error for empty email', (done) => {
        request(app).post('/api/suspend').send(body)
        .end(function(err, res) {
            expect(res.statusCode).to.equal(400);
            expect(res.body.error).to.equal(true);
            expect(res.body.message).to.equal('Invalid Request!,Need student_email');
            done();
        });
     });
  });
});