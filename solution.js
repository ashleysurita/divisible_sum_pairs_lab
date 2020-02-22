// Complete the divisibleSumPairs function below.

//pseudocode
// n = size of array
// k = what the sum of ar numbers need to be evenly divisible by
// ar = array of numbers to check the sum


function divisibleSumPairs(n, k, ar) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = (i+1); j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                sum++;
            }
        }
    }
    return sum;
}
