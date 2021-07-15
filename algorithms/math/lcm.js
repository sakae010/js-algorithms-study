// 最小公倍数
// lcm(a, b) = |a * b| / gcd(a, b)

import {gcd} from "./gcd.js";

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(4, 6))