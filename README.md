# JavaScript Loose Comparison Bug

This repository demonstrates a subtle bug in JavaScript code that arises from loose comparison (==) and type coercion.  The `foo` function aims to handle different input types (null, negative numbers, and positive numbers) distinctly, but unexpected behavior occurs due to JavaScript's implicit type conversions during comparisons.

## Bug Description

The primary issue lies in the way JavaScript handles comparisons, particularly when comparing numbers with null or undefined.  The code fails to precisely differentiate between null and zero.  This leads to unexpected outputs when the input is null or a value that coerces to 0.

## Solution

The solution involves using strict equality (===) to prevent type coercion and ensure accurate comparison.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run the code using a JavaScript interpreter (e.g., Node.js).
4. Observe the output and compare it to the expected behavior.
5. Open `bugSolution.js` to see the corrected code.
6. Run the corrected code and compare the output.