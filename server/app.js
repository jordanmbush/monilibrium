const express = require('express');
const massive = require('massive');
const path = require('path');
// MIDDLEWARES
const session = require('express-session');
const bodyParser = require('body-parser');
// const checkSession = require('./middlewares/checkSession').default;
// const checkAdminSession = require('./middlewares/checkAdminSession');
// CONTROLLERS
// const auth_controller = require('./controllers/auth_controller');
// const user_controller = require('./controllers/user_controller');
// const bill_controller = require('./controllers/bill_controller');
// const transaction_controller = require('./controllers/transaction_controller');
// const income_controller = require('./controllers/income_controller');
// const balance_controller = require('./controllers/balance_controller');
// const admin_controller = require('./controllers/admin_controller');

require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db);
});

app.use(bodyParser.json());
app.use(
  session({
    cookie: {
      // 1 WEEK
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(express.static(`${__dirname}/../build`));
// // ENDPOINTS
// app.get('/auth/callback', auth_controller.connect);
// app.get('/api/user-data', checkSession, user_controller.getUser);
// // app.post('/api/bills', checkSession, bill_controller.addBills)
// app.post('/api/bills', checkSession, bill_controller.addBills);
// app.get('/api/bills', checkSession, bill_controller.getBills);
// app.post('/api/income', checkSession, income_controller.addIncome);
// app.get('/api/income', checkSession, income_controller.getIncome);
// // app.get('/api/transactions', checkSession, transaction_controller.getTransactions);
// app.get(
//   '/api/transactions',
//   checkSession,
//   transaction_controller.getAllTransactions
// );
// app.post(
//   '/api/transactions',
//   checkSession,
//   transaction_controller.addTransactions
// );

// app.post(
//   '/api/transaction',
//   checkSession,
//   transaction_controller.addTransaction
// );
// app.put(
//   '/api/transaction',
//   checkSession,
//   transaction_controller.updateTransaction
// );
// app.delete(
//   '/api/transaction/:id',
//   checkSession,
//   transaction_controller.deleteTransaction
// );

// app.post('/api/balance', checkSession, balance_controller.addBalance);
// app.get('/api/balance', checkSession, balance_controller.getBalance);

// app.post('/api/logout', user_controller.logout);

// app.post('/api/admin-login', admin_controller.login);
// app.get('/api/admin-data', checkAdminSession, admin_controller.getUsersData);
// // THIS ENDPOINT TO BE LEFT INACTIVE UNTIL NEEDED
// // app.post('/api/admin-register', admin_controller.register);

// ==============================================================
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

const PORT = 4000;
app.listen(PORT, console.log(`Listening on port ${PORT}.`));
