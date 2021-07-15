// 杨辉三角形
// C(lineNumber, i) = C(lineNumber, i - 1) * (lineNumber - i + 1) / i
function pascalTriangle(lineNumber) {
    let result = ' '
   for (let line = 1; line <= lineNumber; line++) {
       let C = 1
       for (let i = 1; i <= line; i++) {
           result += C + ' '
           C = C * (line - i) / i
       }
       result += '\n'
   }
   return result
}

console.log(pascalTriangle(5))