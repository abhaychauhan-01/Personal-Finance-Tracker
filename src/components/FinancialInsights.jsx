import { useFinance } from "../context/FinanceContext";

const FinancialInsights = () => {
  const { transactions } = useFinance();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const savingsRate =
    income > 0
      ? (((income - expenses) / income) * 100).toFixed(1)
      : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border">
      <h3 className="font-semibold mb-4">
        Financial Insights
      </h3>

      <div className="space-y-3">
        <div>
          <p className="text-gray-500 text-sm">
            Savings Rate
          </p>
          <p className="font-bold">
            {savingsRate}%
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Total Income
          </p>
          <p className="font-bold text-green-600">
            ₹{income}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Total Expenses
          </p>
          <p className="font-bold text-red-500">
            ₹{expenses}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialInsights;