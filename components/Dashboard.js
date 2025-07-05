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
  { id: 1, type: 'send', description: 'DuitNow Transfer', amount: 150.00, currency: 'MYR', date: '2024-07-22T10:30:00Z', status: 'completed', from: 'Maybank', to: 'CIMB Bank', platform: 'maybank' },
  { id: 2, type: 'receive', description: 'Salary Deposit', amount: 5500.00, currency: 'MYR', date: '2024-07-21T18:00:00Z', status: 'completed', from: 'Company ABC', to: 'Maybank', platform: 'maybank' },
  { id: 3, type: 'payment', description: 'GrabFood Order', amount: 45.50, currency: 'MYR', date: '2024-07-21T13:15:00Z', status: 'completed', from: 'GrabPay', platform: 'grabpay' },
  { id: 4, type: 'payment', description: 'Unifi Bill', amount: 129.00, currency: 'MYR', date: '2024-07-20T11:00:00Z', status: 'completed', from: 'HSBC', platform: 'HSBC' },
  { id: 5, type: 'top-up', description: 'TNG E-Wallet', amount: 50.00, currency: 'MYR', date: '2024-07-19T09:45:00Z', status: 'completed', from: 'CIMB', platform: 'touch_ngo' },
  { id: 6, type: 'send', description: 'Payment to John', amount: 75.00, currency: 'MYR', date: '2024-07-18T16:20:00Z', status: 'pending', from: 'Boost', to: 'Jane Doe', platform: 'boost' },
  { id: 7, type: 'payment', description: 'Netflix Subscription', amount: 55.00, currency: 'MYR', date: '2024-07-18T08:00:00Z', status: 'completed', from: 'Maybank', platform: 'maybank' },
  { id: 8, type: 'receive', description: 'Refund from Lazada', amount: 120.00, currency: 'MYR', date: '2024-07-17T14:50:00Z', status: 'completed', from: 'Lazada', to: 'GrabPay', platform: 'grabpay' },
  { id: 9, type: 'payment', description: 'Parking Fee', amount: 5.00, currency: 'MYR', date: '2024-07-16T19:05:00Z', status: 'failed', from: 'Touch \'n Go', platform: 'touch_ngo' },
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
    case 'completed': return <CheckCircle className="h-4 w-4 text-cyan-400" />;
    case 'pending': return <Clock className="h-4 w-4 text-yellow-400" />;
    case 'failed': return <AlertCircle className="h-4 w-4 text-red-400" />;
    default: return null;
  }
};

const getTransactionIcon = (type) => {
  switch (type) {
    case 'send':
    case 'payment':
    case 'top-up':
      return <ArrowUpRight className="h-4 w-4 text-red-400" />;
    case 'receive':
      return <ArrowDownLeft className="h-4 w-4 text-green-400" />;
    default:
      return <CreditCard className="h-4 w-4 text-gray-400" />;
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 15 },
        visible: {
            opacity: 1, y: 0, rotateX: 0,
            transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
        }
    };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#030712] px-4 sm:px-6 md:px-8 pb-8 pt-28 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)] z-0" />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-[#030712]/20 z-10" />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/[0.1] to-cyan-500/[0.1] rounded-full blur-2xl"
            />
            <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/[0.1] to-indigo-500/[0.1] rounded-full blur-2xl"
            />
        </div>

      <div className="relative w-full max-w-7xl mx-auto space-y-6 z-20">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Dashboard</h1>
                <p className="text-blue-200/60">Manage your wallets and transactions</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-200 font-medium py-2 px-4 rounded-xl transition-colors duration-200 border border-blue-400/20 backdrop-blur-sm text-sm">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                </button>
                <button className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-200 font-medium py-2 px-4 rounded-xl transition-colors duration-200 border border-blue-400/20 backdrop-blur-sm text-sm">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                </button>
            </div>
        </header>

        {/* Total Balance Card */}
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="p-6 rounded-3xl backdrop-blur-xl border border-blue-400/20 shadow-2xl"
            style={{
                background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 211, 238, 0.08) 50%, rgba(99, 102, 241, 0.1) 100%)`,
                boxShadow: `0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-blue-100/80">Total Portfolio Value</h2>
                <button onClick={() => setShowBalances(!showBalances)} className="p-1 rounded-full text-blue-200/70 hover:bg-white/10 hover:text-white transition-colors">
                    {showBalances ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
            </div>
            <div className="space-y-2">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    {showBalances ? formatCurrency(getTotalBalance(), 'MYR') : '••••••••'}
                </div>
            </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-24 flex flex-col items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all duration-200 text-white font-semibold shadow-lg hover:shadow-blue-500/40">
                <Send className="h-6 w-6" />
                <span>Send Money</span>
            </motion.button>
            {['Request', 'Exchange', 'Add Wallet'].map((action, i) => (
                <motion.button key={action} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-24 flex flex-col items-center justify-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-200 text-blue-200">
                    {action === 'Request' && <Download className="h-6 w-6" />}
                    {action === 'Exchange' && <TrendingUp className="h-6 w-6" />}
                    {action === 'Add Wallet' && <Plus className="h-6 w-6" />}
                    <span className="font-medium">{action}</span>
                </motion.button>
            ))}
        </div>

        {/* Main Content */}
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-blue-500/5 backdrop-blur-xl border border-blue-400/10 rounded-3xl shadow-2xl"
            style={{
                boxShadow: `0 25px 50px -12px rgba(59, 130, 246, 0.1)`
            }}
        >
            <div className="flex border-b border-blue-400/20 px-4">
                <button onClick={() => setActiveTab('wallets')} className={`py-4 px-4 text-sm font-medium transition-colors duration-200 relative ${activeTab === 'wallets' ? 'text-white' : 'text-blue-200/60 hover:text-white'}`}>
                    Wallets & Accounts
                    {activeTab === 'wallets' && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" layoutId="underline" />}
                </button>
                <button onClick={() => setActiveTab('transactions')} className={`py-4 px-4 text-sm font-medium transition-colors duration-200 relative ${activeTab === 'transactions' ? 'text-white' : 'text-blue-200/60 hover:text-white'}`}>
                    Recent Transactions
                    {activeTab === 'transactions' && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" layoutId="underline" />}
                </button>
            </div>

            <div className="p-6">
                {activeTab === 'wallets' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {walletAccounts.map(wallet => (
                            <div key={wallet.id} className="p-5 bg-blue-500/10 rounded-2xl border border-blue-400/20 hover:bg-blue-500/20 transition-colors shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {wallet.icon}
                                        <div>
                                            <h3 className="font-semibold text-white">{wallet.name}</h3>
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${wallet.type === 'Bank' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'}`}>
                                                {wallet.type}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="p-1 text-blue-200/60 hover:text-white">
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
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300/50" />
                            <input
                                type="text"
                                placeholder="Search transactions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40 backdrop-blur-sm transition-all duration-200"
                            />
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-blue-200/60 uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Type</th>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Payment Method</th>
                                        <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTransactions.map(tx => (
                                        <tr key={tx.id} className="border-b border-blue-400/10 hover:bg-blue-500/10 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-blue-500/10 rounded-full border border-blue-400/10">{getTransactionIcon(tx.type)}</div>
                                                    <span className="capitalize font-medium text-white">{tx.type}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-white">{tx.description}</div>
                                                <div className="text-xs text-blue-200/60">
                                                    {tx.from && `From: ${tx.from}`}
                                                    {tx.to && `To: ${tx.to}`}
                                                </div>
                                            </td>
                                            <td className={`px-6 py-4 font-semibold ${tx.type === 'receive' ? 'text-green-400' : 'text-red-400'}`}>
                                                {tx.type === 'receive' ? '+' : '-'}{formatCurrency(tx.amount, tx.currency)}
                                            </td>
                                            <td className="px-6 py-4 text-blue-200/80">
                                                <div>{new Date(tx.date).toLocaleDateString()}</div>
                                                <div className="text-xs text-blue-200/60">{new Date(tx.date).toLocaleTimeString()}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={`/logos/${tx.platform}.png`} onError={(e) => { e.currentTarget.src = `/logos/${tx.platform}.jpeg`; e.currentTarget.onerror = null; }} alt={`${tx.platform} logo`} className="h-6 w-6 rounded-full object-contain" />
                                                    <span className="capitalize text-blue-200/80">{tx.platform.replace('_', ' ')}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-1 text-blue-200/60 hover:text-white"><MoreVertical className="h-4 w-4" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
