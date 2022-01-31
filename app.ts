import cors from 'cors';
import express from 'express';
import userRoute from './routes/user/user.route';
import statsRoute from './routes/stats/stats.routes';
import transactionRoutes from './routes/transaction/transaction.route';
import authRoute from './routes/authentication/authentication.route';
import categoryRoutes from './routes/category/category.routes';
import exportRoutes from './routes/export/export.routes';
import moneyAccountsRoutes from './routes/moneyAccounts/moneyAccounts.routes';
import path from 'path';

const port = 5000;
const app = express();

app.set('port', port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


app.use(authRoute);
app.use(userRoute);
app.use(statsRoute);
app.use(transactionRoutes);
app.use(categoryRoutes);
app.use(exportRoutes);
app.use(moneyAccountsRoutes);

export default app;
