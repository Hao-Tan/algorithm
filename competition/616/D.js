function bSearch(range, num) {
    let left = 0;
    let right = range.length;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (range[mid] >= num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function solve(radixes, nums) {
    const range = [];
    radixes.reduce((a, b) => {
        range.push(a + b);
        return a + b;
    }, 0);
    range.unshift(0);

    for (const num of nums) {
        const group = bSearch(range, num);
        const pos = num - range[group - 1];
        console.log(group, pos);
    }
}

let text = '';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', t => {
    if (t === '\r\n' || t === '\n') {
        process.stdin.emit('end');
    } else {
        text += t;
    }
});
process.stdin.on('end', () => {
    const input = text.trim().replace(/\r/g, '').split('\n');
    const radixes = input[1].split(' ').map(num => parseInt(num));
    const indexes = input[2].split(' ').map(num => parseInt(num));

    solve(radixes, indexes);
    process.exit();
});
