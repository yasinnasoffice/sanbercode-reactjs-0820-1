// Soal no 1 relese 0

class animal {
    constructor(shaun) {
      this.animalname = shaun;
      this.animallegs = 4;
      this.cold_blooded = false;
    }
    get cnam() {
      return this.animalname;
    }
    
  }

var sheep = new animal("shaun");
  console.log(sheep.cnam);
  console.log(sheep.animallegs);
  console.log(sheep.cold_blooded);

  // SOal no 1 relese 1