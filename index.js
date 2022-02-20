// import statement를 사용하기 위해서는 package.json 파일에 "type": "module"을 추가한다.
import express from 'express';
import usersRoutes from './routes/usersRoute.js';

const app = express();
const port = 5000;

app.use(express.json()); // express body parser

app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/users', usersRoutes)

app.listen(port, () => console.log(`Node Express API Server running on port ${port}`))