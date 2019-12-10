let creditLimit = 0;


// const loanOut = function(amount) {

//   if (creditLimit === 0) {
//     return error
//   }
//   else if (loanOut <= creditLimit) {
//     creditLimit = creditLimit - loanOut
//     console.log(`Loan accepted, new creditLimit is ${creditLimit}`)
//   }
//   else {
//     loan = loanOut - creditLimit
//     creditLimit = 0
//     console.log(`Loan is ${loan}, new creditLimit is ${creditLimit}`)
     
//   }
// };
const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("Insufficient Funds!");
    } else { 
      creditLimit -= amount;
      resolve(amount);
    }
  });
};


console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });