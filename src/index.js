const express = require('express')
const helmet = require('helmet')
const morgan =  require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


dotenv.config();
const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/', userRouter);

app.all('*', (req, res, next) => {
	res.sendStatus(500);
});

const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

