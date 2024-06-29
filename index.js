// Write your solution in this file!
var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 
  }
  function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer; 
  }

const leastFavoriteCustomer = 'initial customer'; 

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; 
}