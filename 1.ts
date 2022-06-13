function flatten(arr) {
    const res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            res.push(...flatten(item))
        } else {
            res.push(item);
        }
    })

    return res;
}

console.log(flatten([0, 1, 2,[3,4,[5,6]]]))