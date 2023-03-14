const express = require('express');
const router =require('./router/router')
const mongoose=require('mongoose')
const cors=require('cors')

const app = express();

app.use(express.json());

// Enable Cors
app.use(cors());

// DB Config
const db = "mongodb+srv://ibrahim:nyWJIzia1FxJhorx@participants.tqlnkll.mongodb.net/Certificate?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
  
const PORT = process.env.PORT || 8081;


app.use("/api/items", router)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});