const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1
    }

    let result = 0

    for (let i = n; i = 1; i--) {
        result += i * i-1
    }

    return result
}

console.log(factorial(4))