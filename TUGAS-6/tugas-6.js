//Soal no 1

let kelilinglingkaran = function(k,phi,r)
{
    return k*phi*r;
};
console.log('function =',kelilinglingkaran(2,3.14,5))

const luas =(d,phi1,r1,r2) => {return d*phi1*r1*r2;};
console.log ('arrow =',luas (14,3.14,4,4));

//Soal no 2
let kalimat =  "Nama saya yasin";
console.log( kalimat  `
             saya
             adalah
             seorang
             fronted
             developer`);

//Soal no 3

let user = {
    firstName : "Muhammad",
    lastName  : "Yasin",
    fullName  : "Muhammad Yasin N"
}
console.log(user);

//Soal no 4

const newObject = {
    firstName: 'Harry',
    lastName: 'Potter Holt',
    destination: 'Hogwarts React Conf',
    occupation: 'Deve-wizard Avocado',
    spell: 'Vimulus Renderus!!!'
  };

  const {firstName, lastName, destination, occupation, spell} = newObject;
  console.log(firstName, lastName, destination, occupation, spell);

//Soal no 5

let mhs1 =['will','chirs']
let mhs2 =['sam', 'holy']
let mhs3 =['gill', 'brian']
let mhs4 =['noel', 'maggie']
let combine = [...mhs1,...mhs2,...mhs3,...mhs4]
console.log(combine);