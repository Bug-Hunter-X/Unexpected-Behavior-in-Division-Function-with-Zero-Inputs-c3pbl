# JavaScript Division Function Bug

This repository demonstrates a common error in JavaScript: incorrect handling of zero values when performing division.  The function `foo` is intended to divide two numbers but doesn't correctly manage the scenarios where either the numerator or the denominator is zero.  The solution provides a corrected version that gracefully handles these cases.

## Bug Description

The original `foo` function returns 0 if either input is 0, which is not the mathematically correct behavior. Division by zero results in `Infinity`, which is handled correctly, but division with zero as the numerator should ideally return 0. 

## Solution

The solution addresses the bug by adding explicit checks for zero values and providing appropriate results.