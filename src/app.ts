import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 8080;

app.use(cors());
app.use(express.json()); // Added middleware to parse JSON requests
app.use(todoRoutes);

const uri: string = `mongodb+srv://priyakhandelwal65:${process.env.MONGO_PASSWORD}@cluster0.6jzjn.mongodb.net/Cluster0?retryWrites=true&w=majority`;

// mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

// `useFindAndModify` is no longer needed since Mongoose v6.0. It's deprecated and removed.
// mongoose.set("strictQuery", false); // Alternative to setting deprecated options

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => 
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.error("Database connection failed ###############", error);
    throw error;
  });
