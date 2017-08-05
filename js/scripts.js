function drawTree(number) {
    var star;
    for (var i = 1; i <= number; i++) {
        star = '';
        for (var j = 0; j < i; j++) {
            star += ' * ';
        }
        console.log(star);
    }
}
drawTree(7);
