// Initial research for type of array: Map method. Details found: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Final identification of Array type: Two-dimensional array, found in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array; analyzed in: https://www.freecodecamp.org/news/javascript-2d-arrays/

var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099],
  ];

// Example of syntax for referencing two dimensional arrays: arrayName[arrayRow][arrayColumn] (eg. console.log(finances[65][0]) prints only date of row 65)

// Assignment task 1: Calculate total number of months in array
var totalMonths = [finances.length];

//Assignment task 2: Calculate the net total amount of Profit/Losses over the entire period
var total = 0;
var sumCounter = 0
for (var sumCounter = 0; sumCounter < finances.length; sumCounter++) {

  total += finances[sumCounter][1];

}

//Assignment task 3: Calculate the average of the changes in Profit/Losses over the entire period.
var averageChanges = 0;
var averageChangeCounter = 0;
var mathAverageChangeCounter = 0;
var monthlyChanges = 0;
var totalofChanges = 0;
var averageDenominator = totalMonths - 1;
var averageChangesRounded = 0;


for (var averageChangeCounter = 0; averageChangeCounter < averageDenominator; averageChangeCounter++) {
  //Step 1: calculate monthly change per month
  
    monthlyChanges = finances[mathAverageChangeCounter+1][1] - finances[mathAverageChangeCounter][1];
  
  //Step 2: Add total of changes and assign to variable totalofChanges
  // Future improvement: Similar function performed below. Consider converting to function to reuse code.
  totalofChanges += monthlyChanges;
  mathAverageChangeCounter=mathAverageChangeCounter+1
}

averageChanges = totalofChanges/averageDenominator;
// Round result to two decimal points
averageChangesRounded = averageChanges.toFixed(2)


//Assignment task 4: Calculate the greatest increase in profits/losses.
//Proposed: Define Variables. Loop with counters. If number bigger than previous, save counter and amount to final variables
var counterHighLow = 0; //New counter to avoid contaminating previous loops.
var mathCounterHighLow = 0; // counter to perform mathematical operations within loop conditional statements; using loop counter leads to errors.
var monthlyDifference = 0; // Similar to monthlyChanges; different variable name to avoid contamination of results above.
var greatestIncrease = 0; // Variable to hold final greatest increase number
var greatestDecrease = 0; // Variable to hold final greatest decrease number
var dateofgreatestIncrease = 0; // Variable to hold position in array of greatest increase number
var dateofgreatestDecrease = 0; // Variable to hold position in array of greatest decrease number

//loop similar to Assignment task 3. Reusing averageDenominator for same function. Consider changing name of variable and refactoring code to avoid repetitions.
for (var counterHighLow = 0; counterHighLow < averageDenominator; counterHighLow++) {
  // Step 1: a simple subtraction between monthly results.
      monthlyDifference = finances[mathCounterHighLow+1][1] - finances[mathCounterHighLow][1];

    

  //Step 3: Conditional statement to assign highest/lowest numbers to separate variables
   if (monthlyDifference > greatestIncrease) {
       greatestIncrease = monthlyDifference;
       dateofgreatestIncrease = counterHighLow+1;
   } else if (monthlyDifference < greatestDecrease) {
       greatestDecrease = monthlyDifference;
       dateofgreatestDecrease = counterHighLow+1;
   }
   
   mathCounterHighLow=mathCounterHighLow + 1
}

console.log("Financial Analysis");
console.log("----------------");
console.log("Total Months: " + String(totalMonths));
console.log("Total: $" + total);
console.log("Average Change: " + averageChangesRounded);
console.log("Greatest Increase in Profits/Losses: " + finances[dateofgreatestIncrease][0] + " ($" + greatestIncrease + ")");
console.log("Greatest Decrease in Profits/Losses: " + finances[dateofgreatestDecrease][0] + " ($" + greatestDecrease+ ")");
