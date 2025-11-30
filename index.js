import express from 'express';
import connectDB from './config/db.js';
// import connectDB from './config/db';
import authRoutes from  './routes/auth.routes.js';
import fileRoutes from "./routes/file.routes.js";



const app = express();

app.use(express.json());
connectDB();

const PORT  = 3000;

app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);

app.get("/",(req,res) => {
res.send('API IS RUNNING :) ');


});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
