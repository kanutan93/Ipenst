const express = require('express'),
  app = express(),
  port = 8080;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

var client = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'app93885195@heroku.com',
    pass: '5yxs0qe99385'
  }
});

app.use(bodyParser.json());

app.post('/api/v1', (req, res) => {
  let msg = '';
  msg += '<h2>Спасибо за заявку. Специалист свяжется с вами в ближайшее время</h2>';
  req.body.tasks.forEach(task => {
    msg += `<p style="font-weight: bold">${task.title}</p>`
    if(typeof task.value === 'string' || task.value instanceof String) {
      msg += `<p>${task.value}</p>`
    } else if(task.value.length) {
      for(var key in task.value) {
        if(task.value.hasOwnProperty(key)){
          console.log(task.value[key]);
          msg += `<p>${task.value[key].title} <span style="font-weight: bold;"> Стоимость: <span style="color: green">${task.value[key].value}</span></span></p>`
        }
      }
    } else if(task.value.title) {
      msg += `<p>${task.value.title} <span style="font-weight: bold;">Стоимость: <span style="color: green">${task.value.value}</span></span></p>`;
    }
  });

  msg += `<h2>Сумма: <span style="color: green">${req.body.sum}</span></h2>`;

  const messageClient = {
    from: 'app93885195@heroku.com',
    to: req.body.email,
    subject: 'Prototype. Заявка на тестирование.',
    html: msg
  };

  const messageProducer1 = {
    from: 'app93885195@heroku.com',
    to: 'kanutan93@gmail.com',
    subject: 'Prototype. Заявка на тестирование.',
    html: msg
  };

  const messageProducer2 = {
    from: 'app93885195@heroku.com',
    to: 'kanutan93@gmail.com',
    subject: 'Prototype. Заявка на тестирование.',
    html: msg
  };



  client.sendMail(messageClient, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  client.sendMail(messageProducer1, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  client.sendMail(messageProducer2, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.use('/', express.static(__dirname + '/dist'));
app.all('*', (req, res) =>  {
  res.redirect('https://ipsecurity.herokuapp.com:8080/');
});


app.listen(port);
