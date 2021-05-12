import {RequestHandler, Request, Response} from 'express';
import moment from 'moment';
import {tokenDecoder} from '../../helpers/tokenDecoder';
import Transaction from '../../dbModels/transaction/transaction.model';
import {KeyStringNumber, SumStats} from '../../models/stats';
import {EventTypes, MomentConstants} from '../../models/transactions';

export const getStats: RequestHandler = async (req: Request, res: Response) => {
  const userId = tokenDecoder(req.headers.authorization);
  const {from, to} = req.params;

  try {
    const transactions = await Transaction.find({
      userId,
      createdAt: {
        $gte: moment(from).startOf(MomentConstants.DAY).toDate(),
        $lt: moment(to).endOf(MomentConstants.DAY).toDate()
      }
    });
    const income: KeyStringNumber = {};
    const expense: KeyStringNumber = {};
    const incomeStats: SumStats[] = [];
    const expenseStats: SumStats[] = [];

    transactions.forEach((transaction) => {
      transaction.events.forEach(({category, amount, type}) => {
        if (type === EventTypes.INCOME && category) {
          income[category] = income[category] + amount || amount;
        }

        if (type === EventTypes.EXPENSE && category) {
          expense[category] = expense[category] + amount || amount;
        }
      });
    });

    const test: [string, number][] = Object.entries(income);

    Object.keys(income).forEach((key) => {
      incomeStats.push({
        category: key,
        value: income[key],
        color: generateRandomColor(),
        label: key
      });
    });
    Object.keys(expense).forEach((key) => {
      expenseStats.push({
        category: key,
        value: expense[key],
        color: generateRandomColor(),
        label: key
      });
    });

    return res.json({incomeStats, expenseStats, test});
  } catch (error) {
    return res.json(error);
  }
};

const generateRandomColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
