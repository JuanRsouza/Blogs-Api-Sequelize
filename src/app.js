const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postsRouter = require('./routes/postsRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postsRouter);
// ...
app.use(errorHandler);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
