function drawTree(number) {
    var star, i, j;
    for (i = 1; i <= number; i++) {
        star = '';
        for (j = 0; j < i; j++) {
            star += ' * ';
        }
        console.log(star);
    }
}
drawTree(7);
