// 判断是否是2的幂
// 被除数都能被2整除
function isPowerOfTwo(number) {
    if (number < 1) {
        return false
    }
    let dividedNumber = number
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            return false;
        }

        dividedNumber /= 2
    }
    return true;
}