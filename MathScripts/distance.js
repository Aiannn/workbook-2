// let x1 = [0,0]
// let x2 = [4,5]

// let ditance = ((x2[0] - x1[0]) + (x2[1] -x1[1]))**0.5

function distance(a, b) {
    return ((b[0] - a[0])**2 + (b[1] - a[1])**2)**0.5
}

console.log(distance([0, 0], [4, 5]))