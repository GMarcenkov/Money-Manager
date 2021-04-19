import Category, {DUMMY_EXPENSE_CATEGORIES, DUMMY_INCOME_CATEGORIES} from '../../interfaces/category';
import ExpenseCategories from '../../models/category/expenseCategory';
import IncomeCategories from '../../models/category/incomeCategory';

export const addCategories = async (userId: string): Promise<any> => {
  try {
    const expenseCategories: Category = await new ExpenseCategories({
      userId,
      expenseCategories: DUMMY_EXPENSE_CATEGORIES
    });
    const incomeCategories: Category = await new IncomeCategories({
      userId,
      DUMMY_INCOME_CATEGORIES
    });

    expenseCategories.save();
    incomeCategories.save();
  } catch (error) {
    return error;
  }
};
