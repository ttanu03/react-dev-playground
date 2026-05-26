let x = 1      // outer x

function example() {
    let x = 2  // inner x — shadows the outer x
    console.log(x)  // 2 — sees inner x, outer x is hidden
}

example()
console.log(x)  // 1 — outer x is untouched