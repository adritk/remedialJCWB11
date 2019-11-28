function tiket(antrian){
    var uang25 = 0
    var uang50 = 0
    for(var i = 0;i<antrian.length;i++){
      if(antrian[i] == 25){
        uang25 += 1
      }
      if(antrian[i] == 50){
        uang25 -= 1
        uang50 += 1
      }
      if(antrian[i] == 100){
        if(uang50 == 0 && uang25 >= 3){
          uang25 -= 3
        }else{
          uang25 -= 1
          uang50 -= 1;
        }
      }
      if(uang25 < 0 || uang50 < 0){
         return 'NO';
      }
    }
    return 'YES';
  }
  console.log(tiket([25,25,50]))
  console.log(tiket([25,100]))
  console.log(tiket([25,25,50,50,100]))