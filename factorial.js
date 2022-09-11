const factorial = (n) => {
    let result = 1

    for (let i = 2; i <= n; i++) {
        result = result * i
    }

    return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(7))
console.log(factorial(13))
console.log(factorial(20))

// Big-O = O(n)