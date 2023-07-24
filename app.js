const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { contactsRouter } = require('./routes/contacts');
const { usersRouter } = require("./routes/users/users");
const { errorHandler } = require("./helpers/index");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static('public'));


app.use('/api/contacts', contactsRouter);
app.use('/users', usersRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use(errorHandler);

module.exports = app;
