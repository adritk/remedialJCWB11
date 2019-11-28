function segitigaGanjilTambah (num) {
    var a = num*(num-1) + 1 
    var b = 0
    if (a > 1) {
        for (let i = 0 ; i < num; i++) {
            b += a
            a+=2
        }
        return b
    }
    return a
}

console.log(segitigaGanjilTambah(2))