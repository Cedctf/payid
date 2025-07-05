import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  CreditCard, 
  Plus, 
  MoreVertical, 
  Eye, 
  EyeOff, 
  ArrowUpRight, 
  ArrowDownLeft, 
  TrendingUp, 
  TrendingDown,
  Bitcoin,
  Send,
  Download,
  Settings,
  Bell,
  Search,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

// Mock Data for Malaysian Banks and E-wallets
const walletAccounts = [
  {
    id: 'maybank',
    name: 'Maybank',
    type: 'Bank',
    balance: 15250.75,
    currency: 'MYR',
    icon: <img src="/logos/maybank.jpeg" alt="Maybank" className="h-8 w-8 rounded-full" />,
  },
  {
    id: 'cimb',
    name: 'CIMB Bank',
    type: 'Bank',
    balance: 8540.20,
    currency: 'MYR',
    icon: <img src="/logos/cimb.png" alt="CIMB" className="h-8 w-8 rounded-full" />,
  },
  {
    id: 'hsbc',
    name: 'HSBC Bank',
    type: 'Bank',
    balance: 22300.00,
    currency: 'MYR',
    icon: <img src="/logos/HSBC.png" alt="HSBC" className="h-8 w-8 rounded-full" />,
  },
  {
    id: 'tng',
    name: 'Touch \'n Go',
    type: 'E-Wallet',
    balance: 750.50,
    currency: 'MYR',
    icon: <img src="/logos/touch_ngo.jpeg" alt="Touch n Go" className="h-8 w-8 rounded-full" />,
  },
  {
    id: 'boost',
    name: 'Boost',
    type: 'E-Wallet',
    balance: 320.80,
    currency: 'MYR',
    icon: <img src="/logos/boost.png" alt="Boost" className="h-8 w-8 rounded-full" />,
  },
  {
    id: 'grabpay',
    name: 'GrabPay',
    type: 'E-Wallet',
    balance: 510.00,
    currency: 'MYR',
    icon: <img src="/logos/grabpay.png" alt="GrabPay" className="h-8 w-8 rounded-full" />,
  },
];

const transactions = [
  {
    id: 'tx-1',
    type: 'receive',
    amount: 250.00,
    currency: 'MYR',
    description: 'DuitNow from Ahmad',
    date: '2025-07-05T10:30:00Z',
    status: 'completed',
    from: 'Ahmad (012-3456789)'
  },
  {
    id: 'tx-2',
    type: 'send',
    amount: 85.50,
    currency: 'MYR',
    description: 'GrabFood Order',
    date: '2025-07-05T08:15:00Z',
    status: 'completed',
    to: 'GrabFood'
  },
  {
    id: 'tx-3',
    type: 'send',
    amount: 120.00,
    currency: 'MYR',
    description: 'Unifi Bill Payment',
    date: '2025-07-04T16:45:00Z',
    status: 'completed',
    to: 'Telekom Malaysia'
  },
  {
    id: 'tx-4',
    type: 'receive',
    amount: 5000.00,
    currency: 'MYR',
    description: 'Salary Deposit',
    date: '2025-07-04T09:00:00Z',
    status: 'completed',
    from: 'Tech Company Sdn Bhd'
  },
  {
    id: 'tx-5',
    type: 'send',
    amount: 50.00,
    currency: 'MYR',
    description: 'TNG E-Wallet Top-up',
    date: '2025-07-03T14:20:00Z',
    status: 'pending',
    to: 'Touch \'n Go'
  }
];

// Helper Functions
const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

const getTotalBalance = () => {
  return walletAccounts.reduce((total, wallet) => total + wallet.balance, 0);
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
    case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
    case 'failed': return <AlertCircle className="h-4 w-4 text-red-500" />;
    default: return null;
  }
};

const getTransactionIcon = (type) => {
  switch (type) {
    case 'send': return <ArrowUpRight className="h-5 w-5 text-red-400" />;
    case 'receive': return <ArrowDownLeft className="h-5 w-5 text-green-400" />;
    case 'exchange': return <TrendingUp className="h-5 w-5 text-blue-400" />;
    default: return null;
  }
};

const Dashboard = () => {
  const [showBalances, setShowBalances] = useState(true);
  const [activeTab, setActiveTab] = useState('wallets');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter(tx =>
    tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Payment Dashboard</h1>
            <p className="text-gray-400">Manage your wallets and transactions</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 border border-gray-700/50 text-sm">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200 border border-gray-700/50 text-sm">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </div>
        </header>

        {/* Total Balance Card */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Total Portfolio Value</h2>
            <button onClick={() => setShowBalances(!showBalances)} className="p-1 rounded-full hover:bg-white/20 transition-colors">
              {showBalances ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </button>
          </div>
          <div className="space-y-2">
                        <div className="text-4xl font-bold">
              {showBalances ? formatCurrency(getTotalBalance(), 'MYR') : '••••••••'}
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+2.4% from last week</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="h-20 flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white font-semibold">
            <Send className="h-5 w-5" />
            <span>Send Money</span>
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700/50">
            <Download className="h-5 w-5" />
            <span>Request</span>
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700/50">
            <TrendingUp className="h-5 w-5" />
            <span>Exchange</span>
          </button>
          <button className="h-20 flex flex-col items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700/50">
            <Plus className="h-5 w-5" />
            <span>Add Wallet</span>
          </button>
        </div>

        {/* Main Content */}
        <div>
          <div className="flex border-b border-gray-700">
            <button onClick={() => setActiveTab('wallets')} className={`py-3 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'wallets' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              Wallets & Accounts
            </button>
            <button onClick={() => setActiveTab('transactions')} className={`py-3 px-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'transactions' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>
              Recent Transactions
            </button>
          </div>

          <div className="py-6">
            {activeTab === 'wallets' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {walletAccounts.map(wallet => (
                  <div key={wallet.id} className="p-5 bg-gray-800 rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-colors shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {wallet.icon}
                        <div>
                          <h3 className="font-semibold text-white">{wallet.name}</h3>
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${wallet.type === 'Bank' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                            {wallet.type}
                          </span>
                        </div>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-white">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-white">
                        {showBalances ? formatCurrency(wallet.balance, wallet.currency) : '••••••'}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'transactions' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700/50 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                
                <div className="bg-gray-800 rounded-xl border border-gray-700/50 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-700/50 text-xs text-gray-300 uppercase">
                      <tr>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Amount</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map(tx => (
                        <tr key={tx.id} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gray-700 rounded-full">{getTransactionIcon(tx.type)}</div>
                              <span className="capitalize font-medium">{tx.type}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-white">{tx.description}</div>
                            <div className="text-xs text-gray-400">
                              {tx.from && `From: ${tx.from}`}
                              {tx.to && `To: ${tx.to}`}
                            </div>
                          </td>
                          <td className={`px-6 py-4 font-semibold ${tx.type === 'receive' ? 'text-green-400' : 'text-red-400'}`}>
                            {tx.type === 'receive' ? '+' : '-'}{formatCurrency(tx.amount, tx.currency)}
                          </td>
                          <td className="px-6 py-4">
                            <div>{new Date(tx.date).toLocaleDateString()}</div>
                            <div className="text-xs text-gray-400">{new Date(tx.date).toLocaleTimeString()}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(tx.status)}
                              <span className="capitalize">{tx.status}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="p-1 text-gray-400 hover:text-white"><MoreVertical className="h-4 w-4" /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
