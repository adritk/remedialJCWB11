function population(p0, percent, imigran, targetPopulasi) {

    var tahun = 0
    while (p0<targetPopulasi) {
        p0 += p0*(percent/100) + imigran
        tahun++
    }
    return tahun
}
console.log(population(1000,2,50,1200))