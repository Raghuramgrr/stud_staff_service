var express = require('express');
var router = express.Router();

router.use('/api/register', require('../action/register').router);
router.use('/api/commonstudents', require('../action/common').router);
router.use('/api/suspend', require('../action/suspend').router);
router.use('/api/retrievefornotifications', require('../action/getnotification').router);

router.get('/', function (req, res) {
    res.render('index', {title: 'API'});
});

module.exports = router;