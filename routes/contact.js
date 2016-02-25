var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
});

// MORE CIRCUS NEEDED TO MAKE THIS WORK WIT GMAIL
// WONT WORK AS IS
router.post('/send', function (req, res, next) {

    // form inputs
    var fullname = req.body.fullname;
    var useremail = req.body.email;
    var msg = req.body.msg;
    var htmlmsg = "<p>Create some crazy html string here</p>";

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://vaibhavdesai137%40gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Vaibhav Desai" <vaibhavdesai137@gmail.com>',
        to: 'vaibhavdesai137@gmail.com',
        subject: 'Holy crap, someone actually visited this website!',
        text: 'New message from a user - ' + useremail,
        html: htmlmsg
    };

    // send mail with defined transport object
    /*transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });*/
    
    console.log('Skipped sending the email...');
    res.redirect('/');
});

module.exports = router;