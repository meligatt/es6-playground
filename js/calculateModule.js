export const  calculateMonthlyPayment = function(principal, years, rate) {
  let monthlyRate = 0;
  if (rate){
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12 )));
  
  return monthlyPayment;
};

export const calculateLoremIpsum = function() {
  return 'lorem ipsum lorem ipsum';
};