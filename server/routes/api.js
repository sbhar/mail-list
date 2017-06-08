const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET api listing. */
router.get('/', (req, res) => {

  res.send('api works');

});


router.get('/sendEmail', (req, res) => {
	
	 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Change this to your Angular 2 port number
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
  console.log(res);
  console.log(req);
  var smtpConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'sbhar123@gmail.com',
          pass: 'buchanduncho210'
      }
  };

  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
      from: 'email',
      to: 'sugatabhar@yahoo.com',
      subject: 'Test',
      text: 'test'
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
	  transport.close();
  });
});

module.exports = router;