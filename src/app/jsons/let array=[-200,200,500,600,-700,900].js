let array = [-200, 200, 500, 600, -700, 900]

array.reduce((acc, curr) => {
    curr > 0 ? acc.deposits += curr : acc4.withdrawal += curr;
    return acc
}, { deposits: 0, withdrawal: 0 })

//another way
array.reduce((acc, curr) => {
    // curr>0 ? acc.deposits+=curr : acc4.withdrawal+=curr;
    acc[curr > 0 ? 'deposits' : 'withdrwal'] += curr;
    return acc
}, { deposits: 0, withdrawal: 0 })