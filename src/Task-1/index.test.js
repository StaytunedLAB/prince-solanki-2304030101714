const { test, describe, it } = require('node:test');
const assert = require('node:assert');
const {
  parseAmount,
  isValidTransactionType,
  validateTransaction,
  processTransaction,
  processBankingTransaction
} = require('./index');

describe('Banking System Tests', () => {

  describe('parseAmount', () => {
    it('should parse valid numbers', () => {
      assert.strictEqual(parseAmount(100), 100);
      assert.strictEqual(parseAmount('200'), 200);
      assert.strictEqual(parseAmount('50.5'), 50.5);
    });

    it('should return null for invalid inputs', () => {
      assert.strictEqual(parseAmount('abc'), null);
      assert.strictEqual(parseAmount(null), null);
      assert.strictEqual(parseAmount(undefined), null);
      assert.strictEqual(parseAmount(Infinity), null);
    });
  });

  describe('isValidTransactionType', () => {
    it('should return true for valid types', () => {
      assert.strictEqual(isValidTransactionType('Deposit'), true);
      assert.strictEqual(isValidTransactionType('Withdraw'), true);
    });

    it('should return false for invalid types', () => {
      assert.strictEqual(isValidTransactionType('Transfer'), false);
      assert.strictEqual(isValidTransactionType(''), false);
      assert.strictEqual(isValidTransactionType(123), false);
    });
  });

  describe('validateTransaction', () => {
    it('should validate a correct transaction', () => {
      const txn = { type: 'Deposit', amount: 100 };
      const result = validateTransaction(txn);
      assert.strictEqual(result.isValid, true);
      assert.strictEqual(result.error, null);
    });

    it('should fail if transaction is not an object', () => {
      assert.strictEqual(validateTransaction(null).isValid, false);
      assert.strictEqual(validateTransaction('string').isValid, false);
    });

    it('should fail if type is missing or invalid', () => {
      assert.strictEqual(validateTransaction({ amount: 100 }).isValid, false);
      assert.strictEqual(validateTransaction({ type: 'Bad', amount: 100 }).isValid, false);
    });

    it('should fail if amount is missing, invalid or non-positive', () => {
      assert.strictEqual(validateTransaction({ type: 'Deposit' }).isValid, false);
      assert.strictEqual(validateTransaction({ type: 'Deposit', amount: 'abc' }).isValid, false);
      assert.strictEqual(validateTransaction({ type: 'Deposit', amount: -10 }).isValid, false);
      assert.strictEqual(validateTransaction({ type: 'Deposit', amount: 0 }).isValid, false);
    });
  });

  describe('processTransaction', () => {
    it('should apply a deposit', () => {
      const account = { balance: 1000 };
      const txn = { type: 'Deposit', amount: 500 };
      const result = processTransaction(account, 0, txn);

      assert.strictEqual(result.applied, true);
      assert.strictEqual(account.balance, 1500);
    });

    it('should apply a withdrawal', () => {
      const account = { balance: 1000 };
      const txn = { type: 'Withdraw', amount: 200 };
      const result = processTransaction(account, 0, txn);

      assert.strictEqual(result.applied, true);
      assert.strictEqual(account.balance, 800);
    });

    it('should fail withdrawal if insufficient balance', () => {
      const account = { balance: 100 };
      const txn = { type: 'Withdraw', amount: 200 };
      const result = processTransaction(account, 0, txn);

      assert.strictEqual(result.applied, false);
      assert.match(result.reason, /Insufficient balance/);
      assert.strictEqual(account.balance, 100);
    });
  });

  describe('processBankingTransaction', () => {
    // Capture console.log to avoid cluttering test output
    const originalLog = console.log;
    const logs = [];

    // Hook to capture logs before each test
    // Note: node:test doesn't support beforeEach/afterEach in the same way as Mocha/Jest globally easily without setup
    // But we can wrap the call.
    function runSilent(fn) {
        console.log = (...args) => logs.push(args);
        try {
            return fn();
        } finally {
            console.log = originalLog;
        }
    }

    it('should process a full batch of transactions successfully', () => {
      const input = {
        accountNumber: 'TEST001',
        accountHolder: 'Test User',
        initialBalance: 1000,
        currency: 'USD',
        transactions: [
          { type: 'Deposit', amount: 500 },
          { type: 'Withdraw', amount: 200 }
        ]
      };

      const result = runSilent(() => processBankingTransaction(input));

      assert.strictEqual(result.account.balance, 1300);
      assert.strictEqual(result.appliedTransactions.length, 2);
      assert.strictEqual(result.rejectedTransactions.length, 0);
    });

    it('should handle mixed valid and invalid transactions', () => {
      const input = {
        accountNumber: 'TEST002',
        accountHolder: 'Test User 2',
        initialBalance: 1000,
        currency: 'USD',
        transactions: [
          { type: 'Deposit', amount: 500 }, // +500 = 1500
          { type: 'Withdraw', amount: 2000 }, // Fail
          { type: 'Unknown', amount: 100 }, // Fail
          { type: 'Withdraw', amount: 1500 } // -1500 = 0
        ]
      };

      const result = runSilent(() => processBankingTransaction(input));

      assert.strictEqual(result.account.balance, 0);
      assert.strictEqual(result.appliedTransactions.length, 2);
      assert.strictEqual(result.rejectedTransactions.length, 2);
    });

    it('should handle missing required fields in input', () => {
       const input = {
         // accountNumber missing
         accountHolder: 'Test',
         initialBalance: 100,
         currency: 'USD',
         transactions: []
       };

       const result = runSilent(() => processBankingTransaction(input));

       // In case of error caught in try/catch of processBankingTransaction,
       // it should add to rejectedTransactions with "System Error" or similar logic?
       // The current implementation adds a rejected transaction with error: 'System Error'
       // BUT account will be null.

       assert.strictEqual(result.account, null);
       assert.strictEqual(result.rejectedTransactions.length, 1);
       assert.strictEqual(result.rejectedTransactions[0].error, 'System Error');
    });
  });
});
