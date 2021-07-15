// 计算最大公约数
// 辗转相除法
export function gcd(a, b) {
    console.log(`a: ${a} b: ${b}`)
    // 如果 a < b，那第二次gcd(b, a%b)就会交换
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(9, 12))