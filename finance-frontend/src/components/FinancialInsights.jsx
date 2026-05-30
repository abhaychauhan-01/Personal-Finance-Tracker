import { useFinance } from "../context/FinanceContext";

const FinancialInsights = () => {
  const { transactions } = useFinance();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce(
      (sum, t) =>
        sum + Number(t.amount),
      0
    );

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (sum, t) =>
        sum + Number(t.amount),
      0
    );

  const savingsRate =
    income > 0
      ? (
          ((income - expenses) /
            income) *
          100
        ).toFixed(1)
      : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">

      <h3 className="font-semibold mb-4 dark:text-white">
        Financial Insights
      </h3>

      <div className="space-y-4">

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Savings Rate
          </p>

          <p className="font-bold text-lg dark:text-white">
            {savingsRate}%
          </p>
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Total Income
          </p>

          <p className="font-bold text-green-600 text-lg">
            ₹{income.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Total Expenses
          </p>

          <p className="font-bold text-red-500 text-lg">
            ₹{expenses.toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
};

export default FinancialInsights;