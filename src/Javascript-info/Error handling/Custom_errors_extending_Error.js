// Extending Error
class ValidationError extends Error {
  constructor(message) {
    super(message);          // 1. call parent constructor
    this.name = "ValidationError";  // 2. set correct error name
  }
}


// Usage:
try {
  throw new ValidationError("Invalid data!");
} catch (err) {
  console.log(err.name);    // "ValidationError"
  console.log(err.message); // "Invalid data!"
  console.log(err.stack);   // stack trace
}


// The instanceof check also works
err instanceof ValidationError; // true


// Further Inheritance
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;  // additional info
  }
}


// Wrapping Exceptions
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = "ReadError";
    this.cause = cause;  // keep original error
  }
}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    alert("Original error: " + e.cause); 
  } else {
    throw e; // unknown error
  }
}
