// PRINT TRIANGLE

var i,j,k;

for (i = 1; i <=5 ; i++){
    for ( j=1 ; j<=(5-i); j++ ){
        document.write('&nbsp');
    }
    for (k=1 ; k<=i; k++){
        document.write("* ")
    }
    document.write("<BR>")}



// PRINT DIAMOND
function printDiamond(n) {
    if (n % 2 === 0) {
      n++; // Make sure n is odd for diamond shape
    }
  
    const mid = (n + 1) / 2;
  
    for (let i = 1; i <= n; i++) {
      let row = "";
      const spaces = Math.abs(mid - i);
      const stars = n - 2 * spaces;
  
      for (let j = 1; j <= spaces; j++) {
        row += " ";
      }
  
      for (let k = 1; k <= stars; k++) {
        row += "*";
      }
  
      console.log(row);
    } 
  }
  
  // Usage:
  printDiamond(5);









