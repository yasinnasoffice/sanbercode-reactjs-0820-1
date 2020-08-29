// soal nomor 1

function halo() {
  return "Hallo Sanbers";
}
var tampilkan = halo()
console.log(tampilkan);


// soal nomor 2

function kalikan (num1,num2){
      return hasilkali;
    }

var num1 = 12
var num2 = 4
 
var hasilKali = (12*4);
console.log(hasilKali)


//soal nomor 3

function introduce (name,age,addres,hoby) {
      return perkenalan;
    }

    var name= "jhone";
    var age =30;
    var addres = "belum jadi";
    var hoby= "gaming";
    var perkenalan= ("perkenalankan nama saya "+ name + 
                     " umur saya " + age +
                     " alamat saya " + addres + 
                     " Hobi saya " +hoby);
      console.log(perkenalan);

//soal no 4

var datadiri = {
  
 nama : "asep", 
 Jenis_kelamin : "laki laki",
 hobi : "baca buku",
 tahun_lahir : "1992"
}

console.log(datadiri);

//soal no 5

var databuah = [{nama1: "strawbery", warna: "merah", ada_bijinya: "tidak", harga:9000}, 
                {nama2: "jeruk", warna: "orange", ada_bijinya: "ada", harga:8000}, 
                {nama3: "semangka", warna: "merah", ada_bijinya: "tidak", harga:5000},
                {nama4: "pisang", warna: "kuning", ada_bijinya: "tidak", harga:9000}]

var arraybuahFilter = databuah.filter(function(item){
   return item.nama1 = "strawbery";
})

console.debug(arraybuahFilter)




//soal no 6
function sukafilm (nama, durasi , genre, tahun){
  var datafilm= {};
  datafilm.nama= nama;
  datafilm.durasi= durasi;
  datafilm.genre= genre;
  datafilm.tahun= tahun;
  
  return datafilm;
}

  var data1 = sukafilm("yasin","60 menit","komedi","2002");
  console.log(data1);

  var data2 = sukafilm("nasrulloh","90 menit","horor","2002");
  console.log(data1);
