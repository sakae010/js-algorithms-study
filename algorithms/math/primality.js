// 素数判定

// 质数（或素数）是一个大于1的自然数，不能由两个较小的自然数相乘形成。一个大于1的非质数的自然数被称为复合数。

// 所有大于3的素数都是6k±1的形式，其中k是大于0的任何整数
// 所有整数都可以表示为（6k+i），其中i=-1，0，1，2，3，或4
// （6k+0）、（6k+2）和（6k+4）能被2整除，（6k+3）能被3整除
// https://en.wikipedia.org/wiki/Primality_test
export default function isPrime(num) {
    // 判断 是否是2，2是质数
    if (num < 3) return num > 1;
    // 3<= x < 25的情况，25以前的复数都能被 2 或 3整除
    if ((num % 2 === 0) || (num % 3) === 0) return false;

    // num >= 25的情况
    let count = 5;
    // 所有的除数都小于或等于n/2
    while (Math.pow(count, 2) <= num) {
        // 6k ± 1
        if (num % count === 0 || num % (count + 2) === 0) return false;
        count += 6;
    }

    return true;
}

console.log(isPrime(29))