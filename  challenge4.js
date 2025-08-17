function solve(stones) {
    let counter = 0;
    for (let i = 0; i <= stones.length; i++) {
        if (stones[i] === stones[i + 1]) {
            counter += 1
        }
    }
    if (counter === 0) {
        return -1;
    }
    else {
        return counter
    }

}

console.log('happy');