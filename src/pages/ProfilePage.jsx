import { useAuth } from "../context/AuthContext";
import { useFinance } from "../context/FinanceContext";

const ProfilePage = () => {
  const { user } = useAuth();
  const { transactions } = useFinance();

  const totalTransactions =
    transactions.length;

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

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">

      <div className="flex items-center gap-6 mb-8">

        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h1 className="text-3xl font-bold dark:text-white">
            {user?.name}
          </h1>

          <p className="text-gray-500">
            {user?.email}
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
          <h3 className="text-gray-500 text-sm">
            Total Transactions
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalTransactions}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
          <h3 className="text-gray-500 text-sm">
            Total Income
          </h3>

          <p className="text-3xl font-bold text-green-500 mt-2">
            ₹{income.toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl">
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

export default ProfilePage;