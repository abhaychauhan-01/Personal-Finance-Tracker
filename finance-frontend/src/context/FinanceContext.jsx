import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import {
  getTransactions,
  createTransaction,
  updateTransactionApi,
  deleteTransactionApi,
} from "../api/transactionApi";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState([]);

  const [role, setRole] = useState(
    localStorage.getItem("finance_role") || "admin"
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("finance_theme") || "light"
  );

  // Fetch transactions whenever logged-in user changes
  useEffect(() => {
    fetchTransactions();
  }, [user]);

  const fetchTransactions = async () => {
    try {
      if (!user) {
        setTransactions([]);
        return;
      }

      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.log("Fetch Transactions Error:", error);
      setTransactions([]);
    }
  };

  // Save role
  useEffect(() => {
    localStorage.setItem("finance_role", role);
  }, [role]);

  // Save theme
  useEffect(() => {
    localStorage.setItem("finance_theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Add Transaction
  const addTransaction = async (newTx) => {
    try {
      const created = await createTransaction(newTx);

      setTransactions((prev) => [
        created,
        ...prev,
      ]);
    } catch (error) {
      console.log("Add Transaction Error:", error);
    }
  };

  // Update Transaction
  const updateTransaction = async (updatedTx) => {
    try {
      const updated = await updateTransactionApi(
        updatedTx._id,
        updatedTx
      );

      setTransactions((prev) =>
        prev.map((t) =>
          t._id === updated._id
            ? updated
            : t
        )
      );
    } catch (error) {
      console.log("Update Transaction Error:", error);
    }
  };

  // Delete Transaction
  const deleteTransaction = async (id) => {
    try {
      await deleteTransactionApi(id);

      setTransactions((prev) =>
        prev.filter((t) => t._id !== id)
      );
    } catch (error) {
      console.log("Delete Transaction Error:", error);
    }
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        role,
        setRole,
        theme,
        setTheme,
        fetchTransactions,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () =>
  useContext(FinanceContext);