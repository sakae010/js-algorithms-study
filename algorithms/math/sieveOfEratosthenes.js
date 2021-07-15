// 筛选质数
// 如 筛选出1000以内的质数
// 如何工作的?
// 1. 创建一个长度为 n+1 的布尔数组，即索引 0 ~ n
// 2. 将索引 0 和 1 设置为 false, 其他的都为 true
// 3. 从索引2（第一个质数）开始
// 4. 将所有 索引p的倍数标记为 false，即 2*p, 3*p, 4*p, ...一直到数组最后
// 5. 找到数组中第一个大于p的索引，如果没有，就停止，否则，让p等于新的值（下一个质数）,重复第四步
function sieveOfEratosthenes(maxNumber) {
    // step 1.
    const isPrime = new Array(maxNumber + 1).fill(true)
    // step 2.
    isPrime[0] = false
    isPrime[1] = false

    const primes = []  // 存储质数
    // step 3.
    for (let number = 2; number <= maxNumber; number++) {

        if (isPrime[number] === true) {
            primes.push(number)
            // step 4. 5.
            let nextNumber = 2 * number
            while (nextNumber <= maxNumber) {
                isPrime[nextNumber] = false
                nextNumber += number
            }
        }
    }
    return primes
}

console.log(sieveOfEratosthenes(100))