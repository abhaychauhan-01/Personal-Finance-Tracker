import { useEffect, useState } from "react";
import { useFinance } from "../context/FinanceContext";
import {
  getBudget,
  updateBudget,
} from "../api/budgetApi";

const BudgetOverview = () => {
  const { transactions } = useFinance();

  const [budget, setBudget] =
    useState(0);

  const [budgetInput, setBudgetInput] =
    useState("");

  const income = transactions
    .filter(
      (t) => t.type === "income"
    )
    .reduce(
      (sum, t) =>
        sum + Number(t.amount),
      0
    );

  const expenses = transactions
    .filter(
      (t) => t.type === "expense"
    )
    .reduce(
      (sum, t) =>
        sum + Number(t.amount),
      0
    );

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    try {
      const data =
        await getBudget();

      setBudget(
        data.monthlyBudget
      );

      setBudgetInput(
        data.monthlyBudget
      );
    } catch (error) {
      console.log(error);
    }
  };

  const saveBudget = async () => {
    try {
      const data =
        await updateBudget(
          Number(budgetInput)
        );

      setBudget(
        data.monthlyBudget
      );
    } catch (error) {
      console.log(error);
    }
  };

  const percentage =
    budget > 0
      ? Math.min(
          (expenses / budget) *
            100,
          100
        )
      : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold dark:text-white">
          Budget Overview
        </h3>

        <button
          onClick={saveBudget}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition"
        >
          Save
        </button>
      </div>

      <input
        type="number"
        value={budgetInput}
        onChange={(e) =>
          setBudgetInput(
            e.target.value
          )
        }
        placeholder="Enter Budget"
        className="
          w-full
          p-3
          mb-4
          rounded-xl
          border
          border-gray-300
          dark:border-gray-700
          bg-white
          dark:bg-gray-800
          text-gray-900
          dark:text-white
          placeholder:text-gray-400
        "
      />

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Monthly Budget
      </p>

      <h2 className="text-3xl font-bold mb-4 dark:text-white">
        ₹
        {budget.toLocaleString()}
      </h2>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-4 text-sm space-y-2 dark:text-gray-300">
        <p>
          Spent: ₹
          {expenses.toLocaleString()}
        </p>

        <p>
          Remaining: ₹
          {(
            budget - expenses
          ).toLocaleString()}
        </p>

        <p>
          Income: ₹
          {income.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default BudgetOverview;