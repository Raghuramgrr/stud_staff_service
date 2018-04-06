/*Author: Diva
Date Created: 20/02/18
Description: unit test for retrieving the recipients of a notification
Modified By:
Modified Date:
*/

var app = require('../app');
var chai = require("chai");
var request = require("supertest");
var expect = chai.expect;

    describe('Retrieve recipient from notifications', () => {
        var body = {
            "teacher":  "teacherken10@example.com",
            "notification": "Hello students! @studentjon1@example.com @studentjon12@example.com"
        };

    it('should return IDs associated to teacher as well IDs in notification', (done) => {

        request(app).post('/api/retrievefornotifications').send(body)
        .end(function(err, res) {
            console.log(res.body.recipients)
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Successfully retrieved!');
            expect(res.body.error).to.equal(false);
            done();
        });
});
});

    describe('Retrieve recipient from notifications with duplicate input IDs', () => {
        var body = {
            "teacher":  "teacherken10@example.com",
            "notification": "Hello students! studentagnes10@example.com studentagnes10@example.com"
        };

    it('should return unique IDs from teacher as well as notification', (done) => {

        request(app).post('/api/retrievefornotifications').send(body)
        .end(function(err, res) {

            console.log(res.body)
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal('Successfully retrieved!');
            expect(res.body.error).to.equal(false);
            expect(res.body.count).to.equal(1);
            done();
        });
      });
   });
