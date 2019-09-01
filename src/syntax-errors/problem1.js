for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        for(var k = 0; k < 10; k++) {
            if(i < k) {
                if( k < j) {
                    console.log(i + j + k)
                }
            }
        }
    }
}