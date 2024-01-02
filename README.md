# Console-Finances
A Javascript console application that will produce output from the contents of two arrays. The challenge for week 4 of the bootcamp.


# Spark Notes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Identified name of array in starter code here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Looked for details on two dimensional arrays and code here:
https://www.freecodecamp.org/news/javascript-2d-arrays/

Found how to add within an array here:
https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/

Tests Peformed:
Array calculated separately in Microsoft Excel to establish accuracy of numbers. When numbers at Excel and Console did not match, code was ran in small portion of array. Bug was identified as a mathematical error as minus symbols in deduction cancel out and produce inaccurate results.

//loop similar to Assignment task 3. Reusing averageDenominator for same function. Consider changing name of variable and refactoring code to avoid repetitions.
for (var counterHighLow = 0; counterHighLow < averageChangeCounter; counterHighLow++) {
  //Step 1: calculate monthly changes and assign to variable.
  monthlyDifference = finances[counterHighLow++][1] + finances[counterHighLow][1];
  //Step 2: Conditional statement to assign highest/lowest numbers to separate variables
  if (monthlyDifference > greatestIncrease) {
      greatestIncrease = monthlyDifference;
      dateofgreatestIncrease = counterHighLow;
  } else if (monthlyDifference < greatestDecrease) {
      greatestDecrease = monthlyDifference;
      dateofgreatestDecrease = counterHighLow;
  }
}