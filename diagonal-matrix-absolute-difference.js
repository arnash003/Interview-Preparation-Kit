function diagonalDifference(arr) {
    // Write your code here
    const dim = arr[0].length;
    let leftToRightDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;
    let sum = 0;

    for (let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--) {
        leftToRightDiagonalSum += arr[i][i];
        rightToLeftDiagonalSum += arr[i][j];
    }

    sum = leftToRightDiagonalSum - rightToLeftDiagonalSum;

    if (sum > 0) {
        return sum;
    }
    else if (sum < 0) {
        return (sum * (-1));
    }
    else return 0;

}