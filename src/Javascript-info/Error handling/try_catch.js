
// The “try…catch” Syntax
try {
  // code that may throw an error
} catch (err) {
  // runs if there was an error
} finally {
  // optional — runs *always*
}


// Error Object
try {
  nonexistentVar; // error
} catch (err) {
  console.log(err.name);    // e.g. "ReferenceError"
  console.log(err.message); // details
}


// Optional “catch” Binding
try {
  // ...
} catch {
  // handle error without naming it
}


// Using “try…catch”
try {
  let user = JSON.parse(str);
  alert(user.name);
} catch (err) {
  console.log("Error:", err.message);
}


// Throwing Our Own Errors
throw new Error("Something went wrong");


// Rethrowing
try {
  // ...
} catch (err) {
  if (err instanceof SyntaxError) {
    // handle SyntaxError
  } else {
    throw err; // let someone else handle it
  }
}


// try…catch…finally
try {
  return 1;
} finally {
  console.log("always runs!");
}


