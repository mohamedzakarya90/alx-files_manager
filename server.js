import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

// parsing the JSON request bodies
app.use(express.json());
// loading the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
