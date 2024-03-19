import express from "express";
import tweetRouter from './routes/tweetRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/tweet', tweetRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(3000, () => {
  console.log("server ready at localhost:3000");
});
