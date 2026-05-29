import BudgetOverview from "../components/BudgetOverview";

const BudgetPage = () => {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Budget Management
        </h1>

        <p className="text-gray-500 mt-1">
          Track your monthly spending against your budget.
        </p>
      </div>

      <BudgetOverview />

    </div>
  );
};

export default BudgetPage;