'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ExpenseTracker() {
  const [incomeSources, setIncomeSources] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [budgets, setBudgets] = useState({});
  const [results, setResults] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [tempInput, setTempInput] = useState({ type: '', amount: '' });

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    if (tempInput.type && tempInput.amount) {
      setIncomeSources([...incomeSources, { 
        type: tempInput.type, 
        amount: parseFloat(tempInput.amount) 
      }]);
      setTempInput({ type: '', amount: '' });
    }
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (tempInput.type && tempInput.amount) {
      setExpenseCategories([...expenseCategories, { 
        category: tempInput.type, 
        amount: parseFloat(tempInput.amount) 
      }]);
      setTempInput({ type: '', amount: '' });
    }
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (tempInput.type && tempInput.amount) {
      setBudgets({
        ...budgets,
        [tempInput.type]: parseFloat(tempInput.amount)
      });
      setTempInput({ type: '', amount: '' });
    }
  };

  const calculateResults = () => {
    const totalIncome = incomeSources.reduce((total, source) => total + source.amount, 0);
    const totalExpenses = expenseCategories.reduce((total, category) => total + category.amount, 0);
    const netSavings = totalIncome - totalExpenses;
    
    const categoryPercentages = expenseCategories.map(category => ({
      category: category.category,
      percentage: ((category.amount / totalIncome) * 100).toFixed(2)
    }));

    const budgetExceedance = expenseCategories.map(category => {
      const budget = budgets[category.category] || 0;
      return {
        category: category.category,
        exceedsBudget: category.amount > budget,
        excessAmount: category.amount - budget
      };
    });

    setResults({
      totalIncome,
      totalExpenses,
      netSavings,
      categoryPercentages,
      budgetExceedance
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Personal Expense Tracker
          </h1>
          <p className="text-gray-600 mt-2">
            Track your income, expenses, and budgets efficiently
          </p>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex space-x-4 mb-6">
          <Button onClick={() => setActiveForm('income')}>Add Income</Button>
          <Button onClick={() => setActiveForm('expense')}>Add Expense</Button>
          <Button onClick={() => setActiveForm('budget')}>Set Budget</Button>
          <Button onClick={calculateResults}>Calculate Results</Button>
        </div>

        {activeForm === 'income' && (
          <form onSubmit={handleIncomeSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Income Source"
              value={tempInput.type}
              onChange={(e) => setTempInput({ ...tempInput, type: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={tempInput.amount}
              onChange={(e) => setTempInput({ ...tempInput, amount: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <Button type="submit">Add Income</Button>
          </form>
        )}

        {activeForm === 'expense' && (
          <form onSubmit={handleExpenseSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Expense Category"
              value={tempInput.type}
              onChange={(e) => setTempInput({ ...tempInput, type: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={tempInput.amount}
              onChange={(e) => setTempInput({ ...tempInput, amount: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <Button type="submit">Add Expense</Button>
          </form>
        )}

        {activeForm === 'budget' && (
          <form onSubmit={handleBudgetSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Budget Category"
              value={tempInput.type}
              onChange={(e) => setTempInput({ ...tempInput, type: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="number"
              placeholder="Amount"
              value={tempInput.amount}
              onChange={(e) => setTempInput({ ...tempInput, amount: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <Button type="submit">Set Budget</Button>
          </form>
        )}

        {results && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <span className="mr-2">📊</span> Financial Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Income:</span>
                  <span className="font-semibold text-green-600">₹{results.totalIncome}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Expenses:</span>
                  <span className="font-semibold text-red-600">₹{results.totalExpenses}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-gray-600">Net Savings:</span>
                  <span className={`font-semibold ₹{results.netSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{results.netSavings}
                  </span>
                </div>
              </div>
            </div>
            {results.categoryPercentages.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.category}
                </h3>
                <p className="text-gray-600">Percentage: {item.percentage}%</p>
              </div>
            ))}
            {results.budgetExceedance.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg border ₹{item.exceedsBudget ? 'border-red-300' : 'border-gray-100'}`}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.category}
                </h3>
                <p className="text-gray-600">
                  {item.exceedsBudget
                    ? `Exceeds Budget by ₹${item.excessAmount}`
                    : 'Within Budget'}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
