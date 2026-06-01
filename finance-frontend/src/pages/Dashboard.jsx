import { useState } from "react";
import SummaryCards from "../components/SummaryCards";
import TransactionTable from "../components/TransactionTable";
import AddTransactionModal from "../components/AddTransactionModal";
import DashboardCharts from "../components/DashboardCharts";
import { useFinance } from "../context/FinanceContext";
import { useAuth } from "../context/AuthContext";
import BudgetOverview from "../components/BudgetOverview";
import FinancialInsights from "../components/FinancialInsights";
import ProfilePage from "./ProfilePage";
import InsightsPage from "./InsightPage";
import BudgetPage from "./BudgetPage";
import TransactionsPage from "./TransactionsPage";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  BarChart3,
  User,
  LogOut,
  Plus,
  Sun,
  Moon,
  Menu,
} from "lucide-react";


const Dashboard = () => {
const { theme, setTheme } = useFinance();
const { logout, user } = useAuth();
const [sidebarOpen, setSidebarOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [activeTab, setActiveTab] = useState("overview");
const [editingTransaction, setEditingTransaction] = useState(null);

const handleEditClick = (transaction) => {
setEditingTransaction(transaction);
setIsModalOpen(true);
};

const handleCreateClick = () => {
setEditingTransaction(null);
setIsModalOpen(true);
};

const sidebarItems = [
{
label: "Dashboard",
icon: LayoutDashboard,
value: "overview",
},
{
label: "Transactions",
icon: Receipt,
value: "transaction",
},
{
label: "Budget",
icon: Wallet,
value: "budget",
},
{
label: "Insights",
icon: BarChart3,
value: "insights",
},
{
label: "Profile",
icon: User,
value: "profile",
},
];

return ( <div className="h-screen flex bg-gray-50 dark:bg-gray-950 overflow-hidden">
   
   {sidebarOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}
  {/* SIDEBAR */}
<aside
  className={`
    fixed lg:static
    top-0 left-0
    h-screen
    w-72
    bg-white dark:bg-gray-900
    border-r border-gray-200 dark:border-gray-800
    flex flex-col justify-between
    z-50
    transition-transform duration-300
    ${
      sidebarOpen
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
>
    <div>
      <div className="p-6">
        <div className="flex items-center justify-between">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    FinanceDash
  </h1>

  <button
    onClick={() => setSidebarOpen(false)}
    className="lg:hidden text-gray-700 dark:text-white"
  >
    ✕
  </button>
</div>

<p className="text-sm text-gray-500 mt-1">
  Personal Finance Tracker
</p>
      </div>

      <nav className="px-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.value}
             onClick={() => {
  setActiveTab(item.value);
  setSidebarOpen(false);
}}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === item.value
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* THEME SECTION */}
      <div className="px-4 mt-8">
        <p className="text-xs uppercase text-gray-400 mb-3">
          Appearance
        </p>

        <button
          onClick={() =>
            setTheme(
              theme === "light"
                ? "dark"
                : "light"
            )
          }
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800"
        >
          {theme === "light" ? (
            <>
              <Moon size={18} />
              Dark Mode
            </>
          ) : (
            <>
              <Sun size={18} />
              Light Mode
            </>
          )}
        </button>
      </div>
    </div>

    {/* USER CARD */}
    <div className="p-4 border-t border-gray-200 dark:border-gray-800">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-4">
        <h3 className="font-semibold dark:text-white">
          {user?.name}
        </h3>

       <p className="text-sm text-gray-500 dark:text-gray-400">
  {user?.email}
</p>
      </div>

      <button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  </aside>
<main className="flex-1 overflow-y-auto p-4 md:p-8">

  <div className="lg:hidden mb-6">
    <button
      onClick={() => setSidebarOpen(true)}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <Menu size={24} />
    </button>
  </div>

  {/* HEADER */}
  <div className="flex items-center justify-between mb-8">
    <div>
      <h2 className="text-3xl font-bold dark:text-white">
  {activeTab === "overview"
    ? "Dashboard"
    : activeTab === "transaction"
    ? "Transactions"
    : activeTab === "budget"
    ? "Budget"
    : activeTab === "insights"
    ? "Insights"
    : "Profile"}
</h2>

     <p className="text-gray-500 dark:text-gray-400">
  Welcome back, {user?.name}
</p>
    </div>

   <button
  onClick={handleCreateClick}
  className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
>
  <Plus size={18} />
  Add Transaction
</button>
  </div>

  {/* CONTENT */}
<div className="flex flex-col xl:flex-row gap-6">


{activeTab === "profile" ? (

  <ProfilePage />

) : activeTab === "insights" ? (

  <InsightsPage />

) : activeTab === "budget" ? (

  <BudgetPage />

) : activeTab === "transaction" ? (

  <TransactionsPage
    onEdit={handleEditClick}
  />

) : (

  <div className="flex flex-col xl:flex-row gap-6">

    {/* LEFT SIDE */}
    <div className="flex-1 space-y-6">

      <SummaryCards />

      <DashboardCharts />

      <TransactionTable
        onEdit={handleEditClick}
      />

    </div>

    {/* RIGHT SIDE */}
    <div className="w-full xl:w-80 space-y-6">

      <BudgetOverview />

      <FinancialInsights />

    </div>

  </div>

)}
</div>
    
   {/* MOBILE FLOATING ADD BUTTON */}
<button
  onClick={handleCreateClick}
  className="
    fixed
    bottom-6
    right-6
    sm:hidden
    bg-blue-600
    hover:bg-blue-700
    text-white
    p-4
    rounded-full
    shadow-lg
    z-40
    transition-all
    duration-300
  "
>
  <Plus size={24} />
</button>
  <AddTransactionModal
    isOpen={isModalOpen}
    onClose={() =>
      setIsModalOpen(false)
    }
    transactionToEdit={
      editingTransaction
    }
  />
</main>
</div>

);
};

export default Dashboard;
