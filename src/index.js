module.exports = function reverse (n) {
     let arr = Math.abs(n).toString().split('');
     for (var i = 0; i < arr.length - 1; i++) {
        arr.splice(i, 0, arr.pop());
    }
    return Number(arr.join(''));
}

