// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
/** 피보나치 수열 알고리즘 */

function fib(a) {
    // add whatever parameters you deem necessary - good luck!  
    if (a == 2 || a == 1) {
        return 1
    } else {

        return fib(a - 1) + fib(a - 2)
    }
}