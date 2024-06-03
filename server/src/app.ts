import express from 'express';
import "dotenv/config"
import cors from "cors"
import routes from './routes';
import { requestLogger } from './logger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(requestLogger);

const PORT = process.env.PORT || 1337;

// app.use(function(req,res,next){
//   setTimeout(next, 3000)
// });

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

routes(app);