const express = require('express');
const next = require('next');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

const send = (request) => {
  const from = "info@paceptclinic.com";
  const msgToPatient = {
    to: `${request.email}`,
    from: "info@paceptclinic.com",
    subject: `Appointment request has been received for ${request.name}`,
    html: '<html lang="en">\n' +
      '<head>\n' +
      '    <meta charset="UTF-8">\n' +
      '    <title>Appointment request successfully received</title>\n' +
      '</head>\n' +
      '<body>\n' +
      ` <br> <h2>Appointment Details Received </h2>` +
      ` <br> <b> Name : </b> ${request.name}\n` +
      ` <br> <b> Address : </b> ${request.address}\n` +
      ` <br> <b> City : </b> ${request.city}\n` +
      ` <br> <b> State : </b> ${request.state}\n` +
      ` <br> <b> Zip Code : </b> ${request.zipcode}\n` +
      ` <br> <b> Email : </b> ${request.email}\n` +
      ` <br> <b> Ph : </b> ${request.phone}\n` +
      ` <br> <b> Best Time To Reach : </b> ${request.best_time}\n` +
      ` <br> <b> Specific Concern : </b> ${request.specific_concern}\n` +
      ` <br> <b> Referred By : </b> ${request.referred_by}\n` +
      `  <br>` +
      `  <br><h3> Our front desk will call you shortly at the provided number ${request.phone}</h3> ${request.referred_by}\n` +
      '</body>\n' +
      '</html>',
  };
  sgMail.send(msgToPatient);

  const msgToClinic = {
    to: `info@paceptclinic.com`,
    from: `info@paceptclinic.com`,
    subject: `[PACEPTCLINIC.COM] Appointment Request from ${request.name}`,
    html: '<html lang="en">\n' +
      '<head>\n' +
      '    <meta charset="UTF-8">\n' +
      `    <title>Appointment Request from ${request.name}</title>\n` +
      '</head>\n' +
      '<body>\n' +
      ` <br> <h2>Appointment Request </h2>` +
      `  <br><b> Name : </b> ${request.name}\n` +
      `  <br><b> Address : </b> ${request.address}\n` +
      `  <br><b> City : </b> ${request.city}\n` +
      `  <br><b> State : </b> ${request.state}\n` +
      `  <br><b> Zip Code : </b> ${request.zipcode}\n` +
      `  <br><b> Email : </b> ${request.email}\n` +
      `  <br><b> Ph : </b> ${request.phone}\n` +
      `  <br><b> Best Time To Reach : </b> ${request.best_time}\n` +
      `  <br><b> Specific Concern : </b> ${request.specific_concern}\n` +
      `  <br><b> Referred By : </b> ${request.referred_by}\n` +
      `  <br>` +
      `  <br><h3> Call ${request.name} at ${request.phone}</h3> ${request.referred_by}\n` +
      '</body>\n' +
      '</html>',
  };
  sgMail.send(msgToClinic);
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const bodyParser = require('body-parser');

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.get(/next/, (req,res)=> { handle(req,res); });

    server.get(/webpack/, (req,res)=> { handle(req,res); });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.post('/api/contact', (req, res) => {
      console.log("Received an email request");
      console.log(req.body);

      // Sending emails to both patient and the clinic
      send(req.body);
      res.send('success')
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Website served on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
  });