import cors from "cors";
import express from "express";
import userRoute from "./routes/user/user.route";
import statsRoute from "./routes/stats/stats.routes";
import transactionRoutes from "./routes/transaction/transaction.route";
import authRoute from "./routes/authentication/authentication.route";

const port = 5000;
const app = express();

app.set("port", port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRoute);
app.use(userRoute);
app.use(statsRoute);
app.use(transactionRoutes);

export default app;
