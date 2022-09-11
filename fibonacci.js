const n = 0

const fibonacci = (n) => {
    const sequence = [0, 1]

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]
    }

    return sequence
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(12))
console.log(fibonacci(20))

// Big-O = O(n)