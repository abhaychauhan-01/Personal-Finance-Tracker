import { useFinance } from "../context/FinanceContext";
import {
Wallet,
TrendingUp,
TrendingDown,
PiggyBank,
} from "lucide-react";

const SummaryCards = () => {
const { transactions } = useFinance();

const income = transactions
.filter((t) => t.type === "income")
.reduce(
(sum, transaction) =>
sum + Number(transaction.amount),
0
);

const expenses = transactions
.filter((t) => t.type === "expense")
.reduce(
(sum, transaction) =>
sum + Number(transaction.amount),
0
);

const balance = income - expenses;

const savingsRate =
income > 0
? (
((income - expenses) / income) *
100
).toFixed(1)
: 0;

const cards = [
{
title: "Total Balance",
value: `₹${balance.toLocaleString()}`,
icon: Wallet,
bg: "from-blue-500 to-indigo-600",
},
{
title: "Income",
value: `₹${income.toLocaleString()}`,
icon: TrendingUp,
bg: "from-green-500 to-emerald-600",
},
{
title: "Expenses",
value: `₹${expenses.toLocaleString()}`,
icon: TrendingDown,
bg: "from-red-500 to-rose-600",
},
{
title: "Savings Rate",
value: `${savingsRate}%`,
icon: PiggyBank,
bg: "from-purple-500 to-violet-600",
},
];

return ( <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {cards.map((card) => {
    const Icon = card.icon;

    return (
      <div
        key={card.title}
        className={`
          bg-gradient-to-r
          ${card.bg}
          rounded-2xl
          p-6
          text-white
          shadow-lg
          hover:scale-[1.02]
          transition-all
          duration-300
        `}
      >
        <div className="flex justify-between items-start">

          <div>
            <p className="text-white/80 text-sm">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div className="bg-white/20 p-3 rounded-xl">
            <Icon size={24} />
          </div>

        </div>
      </div>
    );
  })}
</div>


);
};

export default SummaryCards;
