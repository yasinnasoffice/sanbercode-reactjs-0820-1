// Soal no 1 a

var a = 2 ;
while(a <= 20) {
    console.log(a + ' i love coding');
    a+=2;
}
console.log(' Looping pertama');

// Soal no 1 b

var a = 20 ;
while(a>=0) {
    console.log(a + ' i love coding');
    a-=2;
}

console.log(' Looping kedua');


// Soal no 2
for(var angka = 1; angka <= 20; angka++){
  if((angka%2)==1){
    console.log (angka + ' Santai' + '\n');
  }
  
  else if ((angka%2)===0) {
    console.log(angka + ' Berkualitas' + '\n');
  }
  
}

//Soal no 3
for (var i=1;i<=7;i++){
        for (var j=1;j<=i;j++){
          console.log ("#");
        }
      console.log("\n");
    }

//Soal no 4
var kalimat=["saya", "sangat", "senang", "belajar", "javascript"];
console.log(kalimat);

//Soal no 5
var a = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga","\n"]; 
a.sort();
console.log(a + "\n");
