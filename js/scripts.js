function drawTree(number){
    for (var i=0; i<=number; i++){
        var star='';
        for (var j=0; j<i; j++){
            star += ' * ';
        }
        console.log(star);
    }
}
drawTree(7);