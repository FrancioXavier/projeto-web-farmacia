import { dbConnect } from '../config/db';
import app from './index';

const port = process.env.PORT;

dbConnect();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
