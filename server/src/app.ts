import express from 'express';
import "dotenv/config"
import cors from "cors"
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

routes(app);