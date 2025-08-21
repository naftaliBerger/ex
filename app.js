import express from 'express';
import { getName } from './controllers.js';
import { getHi } from './middelwer.js';
const app = express();

app.use(express.json())

app.use(getHi);

app.post('/user',getName);

app.listen(3000,()=>{
    console.log('servr ranning');
    
})