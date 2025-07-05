import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, PlusCircle, ArrowDownCircle, ArrowUpCircle, Search } from 'lucide-react';

const eWallets = [
  { name: 'Touch \'n Go', logo: '/logos/touch_ngo.jpeg', balance: '1,250.75' },
  { name: 'Boost', logo: '/logos/boost.png', balance: '840.50' },
  { name: 'GrabPay', logo: '/logos/grabpay.png', balance: '512.30' },
];

const banks = [
  { name: 'Maybank', logo: '/logos/maybank.jpeg', balance: '15,842.50' },
  { name: 'HSBC', logo: '/logos/HSBC.png', balance: '11,210.00' },
  { name: 'CIMB Bank', logo: '/logos/cimb.png', balance: '9,780.90' },
];

const transactions = [
    {
        id: 1,
        description: 'Netflix Subscription',
        date: 'July 5, 2025',
        amount: -45.00,
        logo: '/logos/maybank.jpeg',
        type: 'expense'
    },
    {
        id: 2,
        description: 'Salary Deposit',
        date: 'July 4, 2025',
        amount: 5500.00,
        logo: '/logos/cimb.png',
        type: 'income'
    },
    {
        id: 3,
        description: 'KFC Lunch',
        date: 'July 3, 2025',
        amount: -25.50,
        logo: '/logos/touch_ngo.jpeg',
        type: 'expense'
    },
    {
        id: 4,
        description: 'Grab Ride',
        date: 'July 2, 2025',
        amount: -15.00,
        logo: '/logos/grabpay.png',
        type: 'expense'
    },
    {
        id: 5,
        description: 'Freelance Payment',
        date: 'July 1, 2025',
        amount: 1200.00,
        logo: '/logos/hsbc.png',
        type: 'income'
    },
];

const spendingData = [
    { category: 'Food & Dining', amount: 480.75, color: 'bg-blue-500' },
    { category: 'Shopping', amount: 320.00, color: 'bg-blue-400' },
    { category: 'Bills & Utilities', amount: 210.25, color: 'bg-slate-400' },
    { category: 'Transport', amount: 150.50, color: 'bg-slate-500' },
    { category: 'Entertainment', amount: 150.00, color: 'bg-slate-600' },
];

const TotalBalanceCard = ({ totalBalance, eWalletBalance, bankBalance }) => (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl mb-10 border border-blue-500/50 shadow-lg"
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-blue-200 mb-1">Total Net Worth</p>
                <h2 className="text-4xl font-bold text-white">RM {totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
            </div>
            <div className="text-right">
                <p className="text-xs text-blue-200">E-Wallets</p>
                <p className="font-semibold text-white">RM {eWalletBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p className="text-xs text-blue-200 mt-2">Bank Accounts</p>
                <p className="font-semibold text-white">RM {bankBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
        </div>
    </motion.div>
);

const WalletCard = ({ item, isBank }) => (
  <motion.div
    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    className="bg-gray-800/50 rounded-xl p-4 flex items-center justify-between border border-gray-700/50 hover:bg-gray-800/80 transition-colors duration-200 cursor-pointer"
  >
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-600/50 flex-shrink-0">
        <Image 
          src={item.logo} 
          alt={`${item.name} logo`} 
          width={48} 
          height={48} 
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="font-semibold text-white">{item.name}</p>
        <p className="text-gray-400 text-sm">RM {item.balance}</p>
      </div>
    </div>
    <ChevronRight className="text-gray-500" />
  </motion.div>
);

const TransactionRow = ({ transaction }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg mb-3 hover:bg-gray-800/80 transition-colors duration-200"
    >
        <div className="flex items-center">
            {transaction.type === 'income' ? (
                <ArrowUpCircle className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            ) : (
                <ArrowDownCircle className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            )}
            <div>
                <p className="font-semibold text-white">{transaction.description}</p>
                <p className="text-gray-400 text-sm">{transaction.date}</p>
            </div>
        </div>
        <div className="flex items-center">
            <p className="font-semibold text-white mr-4">
                {transaction.type === 'income' ? '+' : '-'}RM {Math.abs(transaction.amount).toFixed(2)}
            </p>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-600/50 flex-shrink-0">
                <Image src={transaction.logo} alt="logo" width={32} height={32} className="object-cover w-full h-full" />
            </div>
        </div>
    </motion.div>
);

const SpendingHabits = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const sortedSpendingData = [...spendingData].sort((a, b) => b.amount - a.amount);
    const totalSpending = sortedSpendingData.reduce((acc, item) => acc + item.amount, 0);

    const colorMap = {
        'bg-blue-500': '#3b82f6',
        'bg-blue-400': '#60a5fa',
        'bg-slate-400': '#94a3b8',
        'bg-slate-500': '#64748b',
        'bg-slate-600': '#475569',
    };

    const radius = 45;
    const cx = 50;
    const cy = 50;
    let startAngle = 0;

    const pieSlices = sortedSpendingData.map(item => {
        const percentage = (item.amount / totalSpending);
        const sweepAngle = percentage * 360;
        const endAngle = startAngle + sweepAngle;

        const startX = cx + radius * Math.cos(startAngle * Math.PI / 180);
        const startY = cy + radius * Math.sin(startAngle * Math.PI / 180);
        const endX = cx + radius * Math.cos(endAngle * Math.PI / 180);
        const endY = cy + radius * Math.sin(endAngle * Math.PI / 180);

        const largeArcFlag = sweepAngle > 180 ? 1 : 0;
        const pathData = `M ${cx},${cy} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`;

        const slice = {
            ...item,
            path: pathData,
            color: colorMap[item.color]
        };
        startAngle = endAngle;
        return slice;
    });

    const hoveredData = hoveredCategory ? sortedSpendingData.find(d => d.category === hoveredCategory) : null;
    const centerText = hoveredData ? `RM ${hoveredData.amount.toFixed(2)}` : `Total Spent`;
    const centerSubText = hoveredData ? hoveredData.category : `RM ${totalSpending.toFixed(2)}`;

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-6">Monthly Spending Breakdown</h3>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
                    {/* Donut Chart */}
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="#1f2937" />
                            {pieSlices.map(slice => (
                                <motion.path
                                    key={slice.category}
                                    d={slice.path}
                                    fill={slice.color}
                                    onMouseEnter={() => setHoveredCategory(slice.category)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    style={{ transformOrigin: '50% 50%' }}
                                />
                            ))}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                            <motion.p key={centerText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-white truncate">{centerText}</motion.p>
                            <motion.p key={centerSubText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: 0.1}} className="text-sm text-gray-400 truncate">{centerSubText}</motion.p>
                        </div>
                    </div>
                    {/* Legend */}
                    <div className="w-full md:w-auto">
                        <div className="space-y-3">
                            {sortedSpendingData.map((item) => (
                                <motion.div
                                    key={item.category}
                                    className="flex items-center cursor-pointer p-1 rounded-md"
                                    onMouseEnter={() => setHoveredCategory(item.category)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    animate={{
                                        backgroundColor: hoveredCategory === item.category ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                        scale: hoveredCategory === item.category ? 1.05 : 1,
                                    }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                >
                                    <span className={`w-3 h-3 rounded-sm mr-3 flex-shrink-0 ${item.color}`}></span>
                                    <div className="flex justify-between w-full items-center">
                                        <span className="text-sm font-medium text-gray-300">{item.category}</span>
                                        <div className="flex flex-col items-end ml-4">
                                            <span className="text-sm font-semibold text-white">RM {item.amount.toFixed(2)}</span>
                                            <span className="text-xs text-gray-500">{((item.amount / totalSpending) * 100).toFixed(0)}%</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate total balances
  const totalEWalletBalance = eWallets.reduce((acc, wallet) => acc + parseFloat(wallet.balance.replace(/,/g, '')), 0);
  const totalBankBalance = banks.reduce((acc, bank) => acc + parseFloat(bank.balance.replace(/,/g, '')), 0);
  const totalBalance = totalEWalletBalance + totalBankBalance;

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(tx =>
    tx.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-gray-700/50">
            <PlusCircle size={18} />
            <span>Add New</span>
          </button>
        </header>

        <main>
          <TotalBalanceCard
            totalBalance={totalBalance}
            eWalletBalance={totalEWalletBalance}
            bankBalance={totalBankBalance}
          />

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">E-Wallets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eWallets.map((wallet, index) => (
                <WalletCard key={index} item={wallet} />
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Linked Banks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {banks.map((bank, index) => (
                <WalletCard key={index} item={bank} isBank />
              ))}
            </div>
          </section>

          <section>
            <div className="flex border-b border-gray-700 mb-4">
                <button 
                    onClick={() => setActiveTab('transactions')}
                    className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'transactions' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                    Recent Transactions
                </button>
                <button 
                    onClick={() => setActiveTab('habits')}
                    className={`py-2 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'habits' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                    Spending Habits
                </button>
            </div>
            <div>
                {activeTab === 'transactions' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <div className="relative mb-4">
                            <Search className="w-5 h-5 text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search transactions by description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            />
                        </div>
                        <div>
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map(tx => (
                                    <TransactionRow key={tx.id} transaction={tx} />
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-gray-400">No transactions found for '{searchTerm}'.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
                {activeTab === 'habits' && <SpendingHabits />}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
