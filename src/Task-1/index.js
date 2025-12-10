// ===========================
// Banking System - Transaction & Balance Validator
// ===========================

/**
 * Validates and converts a value to a valid number
 * @param {any} value - The value to convert
 * @returns {number|null} - Valid number or null if invalid
 */
function parseAmount(value) {
  try {
    const num = Number(value);
    if (isNaN(num) || !isFinite(num)) {
      return null;
    }
    return num;
  } catch {
    return null;
  }
}

/**
 * Validates transaction type
 * @param {string} type - Transaction type to validate
 * @returns {boolean} - True if valid (Deposit or Withdraw)
 */
function isValidTransactionType(type) {
  return typeof type === 'string' && (type === 'Deposit' || type === 'Withdraw');
}

/**
 * Validates a single transaction
 * @param {object} transaction - Transaction object
 * @returns {object} - { isValid: boolean, error: string|null }
 */
function validateTransaction(transaction) {
  // Check if transaction is an object
  if (!transaction || typeof transaction !== 'object') {
    return { isValid: false, error: 'Transaction is not a valid object' };
  }

  // Check if type exists and is valid
  if (!transaction.type) {
    return { isValid: false, error: 'Transaction type is missing' };
  }

  if (!isValidTransactionType(transaction.type)) {
    return { isValid: false, error: `Unknown transaction type: ${transaction.type}` };
  }

  // Check if amount exists
  if (transaction.amount === undefined || transaction.amount === null) {
    return { isValid: false, error: 'Transaction amount is missing' };
  }

  // Parse and validate amount
  const amount = parseAmount(transaction.amount);
  if (amount === null) {
    return { isValid: false, error: `Amount is not a valid number: ${transaction.amount}` };
  }

  // Check if amount is positive
  if (amount <= 0) {
    return { isValid: false, error: `Amount must be positive, got: ${amount}` };
  }

  return { isValid: true, error: null };
}

/**
 * Processes a banking transaction
 * @param {object} account - Account object with balance and transactions
 * @param {number} index - Transaction index
 * @param {object} transaction - Transaction to process
 * @returns {object} - { applied: boolean, transaction: object, reason: string|null }
 */
function processTransaction(account, index, transaction) {
  const validation = validateTransaction(transaction);

  if (!validation.isValid) {
    return {
      applied: false,
      transaction: { ...transaction, index: index + 1 },
      reason: validation.error
    };
  }

  const amount = parseAmount(transaction.amount);

  // Check withdrawal balance
  if (transaction.type === 'Withdraw' && amount > account.balance) {
    return {
      applied: false,
      transaction: { ...transaction, index: index + 1 },
      reason: `Insufficient balance: required ${amount}, available ${account.balance}`
    };
  }

  // Apply transaction
  if (transaction.type === 'Deposit') {
    account.balance += amount;
  } else if (transaction.type === 'Withdraw') {
    account.balance -= amount;
  }

  return {
    applied: true,
    transaction: { ...transaction, amount: amount, index: index + 1 },
    reason: null
  };
}

/**
 * Main banking system processor
 * @param {object} input - Input data with account and transactions
 */
function processBankingTransaction(input) {
  let processingLog = '';
  let account = null;
  let appliedTransactions = [];
  let rejectedTransactions = [];

  try {
    // Validate input
    if (!input || typeof input !== 'object') {
      throw new Error('Input is not a valid object');
    }

    const { accountNumber, accountHolder, initialBalance, currency, transactions } = input;

    // Validate required fields
    if (!accountNumber) {
      throw new Error('Account number is missing');
    }
    if (!accountHolder) {
      throw new Error('Account holder name is missing');
    }
    if (initialBalance === undefined || initialBalance === null) {
      throw new Error('Initial balance is missing');
    }
    if (!currency) {
      throw new Error('Currency is missing');
    }
    if (!Array.isArray(transactions)) {
      throw new Error('Transactions must be an array');
    }

    // Parse initial balance
    const parsedInitialBalance = parseAmount(initialBalance);
    if (parsedInitialBalance === null) {
      throw new Error(`Initial balance is not a valid number: ${initialBalance}`);
    }

    // Initialize account
    account = {
      accountNumber,
      accountHolder,
      initialBalance: parsedInitialBalance,
      currency,
      balance: parsedInitialBalance
    };

    // Process transactions
    transactions.forEach((transaction, index) => {
      const result = processTransaction(account, index, transaction);

      if (result.applied) {
        appliedTransactions.push(result.transaction);
      } else {
        rejectedTransactions.push({
          ...result.transaction,
          reason: result.reason
        });
      }
    });

  } catch (error) {
    // Handle system errors
    rejectedTransactions.push({
      error: 'System Error',
      message: error.message
    });
    processingLog = `Error occurred: ${error.message}`;
  } finally {
    // Always generate output and log
    console.log('\n========================================');
    console.log('BANKING SYSTEM - TRANSACTION SUMMARY');
    console.log('========================================\n');

    if (account) {
      console.log('📋 ACCOUNT INFORMATION:');
      console.log(`  Account Number: ${account.accountNumber}`);
      console.log(`  Account Holder: ${account.accountHolder}`);
      console.log(`  Currency: ${account.currency}`);
      console.log(`  Initial Balance: ${account.initialBalance}`);
      console.log(`  Final Balance: ${account.balance}`);
      console.log();

      console.log('✅ APPLIED TRANSACTIONS:');
      if (appliedTransactions.length === 0) {
        console.log('  (No transactions applied)');
      } else {
        appliedTransactions.forEach((txn) => {
          console.log(`  ${txn.index}. ${txn.type}: ${txn.amount} ${account.currency}`);
        });
      }
      console.log();

      console.log('❌ REJECTED TRANSACTIONS:');
      if (rejectedTransactions.length === 0) {
        console.log('  (No transactions rejected)');
      } else {
        rejectedTransactions.forEach((txn) => {
          if (txn.reason) {
            console.log(`  ${txn.index}. Reason: ${txn.reason}`);
          } else if (txn.error === 'System Error') {
            console.log(`  ${txn.error}: ${txn.message}`);
          }
        });
      }
      console.log();

      console.log('📊 STATISTICS:');
      console.log(`  Total Transactions: ${appliedTransactions.length + rejectedTransactions.length}`);
      console.log(`  Applied: ${appliedTransactions.length}`);
      console.log(`  Rejected: ${rejectedTransactions.length}`);
      console.log();

      processingLog = `Processing completed successfully. ${appliedTransactions.length} transactions applied, ${rejectedTransactions.length} rejected.`;
    } else {
      console.log('⚠️  No account data available due to system error.');
    }

    console.log('📝 AUDIT LOG:');
    console.log(`  ${processingLog}`);
    console.log('\n========================================\n');
  }
}

// ===========================
// TEST CASES
// ===========================

// Test Case 1: Valid transactions
const testCase1 = {
  accountNumber: 'ACC001',
  accountHolder: 'John Doe',
  initialBalance: 1000,
  currency: 'USD',
  transactions: [
    { type: 'Deposit', amount: 500 },
    { type: 'Withdraw', amount: 200 },
    { type: 'Deposit', amount: 300 }
  ]
};

// Test Case 2: Invalid transactions
const testCase2 = {
  accountNumber: 'ACC002',
  accountHolder: 'Jane Smith',
  initialBalance: '2000',
  currency: 'EUR',
  transactions: [
    { type: 'Deposit', amount: 500 },
    { type: 'Withdraw', amount: 3000 }, // Insufficient balance
    { type: 'Deposit', amount: -100 }, // Negative amount
    { type: 'Unknown', amount: 50 }, // Unknown type
    { type: 'Withdraw' }, // Missing amount
    { amount: 200 }, // Missing type
    { type: 'Deposit', amount: 'invalid' } // Invalid amount
  ]
};

// Test Case 3: Edge cases
const testCase3 = {
  accountNumber: 'ACC003',
  accountHolder: 'Bob Johnson',
  initialBalance: '500.50',
  currency: 'GBP',
  transactions: [
    { type: 'Deposit', amount: '250.75' },
    { type: 'Withdraw', amount: 0 }, // Zero amount
    { type: 'Withdraw', amount: 750.25 } // Exact balance
  ]
};

console.log('\n==================== TEST CASE 1 ====================');
processBankingTransaction(testCase1);

console.log('\n==================== TEST CASE 2 ====================');
processBankingTransaction(testCase2);

console.log('\n==================== TEST CASE 3 ====================');
processBankingTransaction(testCase3);
