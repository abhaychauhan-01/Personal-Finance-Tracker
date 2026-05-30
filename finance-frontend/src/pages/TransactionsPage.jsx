import { useState } from "react";
import TransactionTable from "../components/TransactionTable";

const TransactionsPage = ({
  onEdit,
}) => {
  const [search, setSearch] =
    useState("");

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          Transactions List
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          View and manage all your transactions.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700">

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="
            w-full
            p-3
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

      </div>

      <TransactionTable
        onEdit={onEdit}
      />

    </div>
  );
};

export default TransactionsPage;