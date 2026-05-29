import { useFinance } from "../context/FinanceContext";

const InsightsPage = () => {
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

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) +
        Number(t.amount);
    }
  });

  const topCategory =
    Object.entries(categoryTotals).sort(
      (a, b) => b[1] - a[1]
    )[0];

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold dark:text-white">
        Financial Insights
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border">
          <h3 className="text-gray-500 text-sm">
            Savings Rate
          </h3>

          <p className="text-4xl font-bold text-green-500 mt-2">
            {savingsRate}%
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border">
          <h3 className="text-gray-500 text-sm">
            Top Expense Category
          </h3>

          <p className="text-2xl font-bold mt-2">
            {topCategory
              ? topCategory[0]
              : "N/A"}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border">
          <h3 className="text-gray-500 text-sm">
            Total Income
          </h3>

          <p className="text-3xl font-bold text-green-500 mt-2">
            ₹{income.toLocaleString()}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border">
          <h3 className="text-gray-500 text-sm">
            Total Expenses
          </h3>

          <p className="text-3xl font-bold text-red-500 mt-2">
            ₹{expenses.toLocaleString()}
          </p>
        </div>

      </div>

    </div>
  );
};

export default InsightsPage;