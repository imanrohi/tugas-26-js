function panggilIsFinity() {
  var angka = ([2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]);
  var output="";
  for (var i=0;i<angka.length;i++){
    output = isFinite(angka[i])
    if(output==true) {
      console.log("Angka ",angka[i]," Not Infinity");
    }
  }
}
panggilIsFinity();
