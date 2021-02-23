const shipFactory = (name) => {
  class Carrier {
    constructor() {
      this.name = 'carrier';
      this.hits = [];
      this.position = [];
      this.length = 5;
      this.axis = 'x';
      this.isSunk = false;
    }

    isHit(index) {
      this.hits.push(index);
    }
  }

  class Battleship {
    constructor() {
      this.name = 'battleship';
      this.hits = [];
      this.position = [];
      this.length = 4;
      this.axis = 'x';
      this.isSunk = false;
    }

    isHit(index) {
      this.hits.push(index);
    }
  }

  class Destroyer {
    constructor() {
      this.name = 'destroyer';
      this.hits = [];
      this.position = [];
      this.length = 3;
      this.axis = 'x';
      this.isSunk = false;
    }

    isHit(index) {
      this.hits.push(index);
    }
  }

  class PatrolBoat {
    constructor() {
      this.name = 'patrol boat';
      this.hits = [];
      this.position = [];
      this.length = 2;
      this.axis = 'x';
      this.isSunk = false;
    }

    isHit(index) {
      this.hits.push(index);
    }
  }

  class FishingBoat {
    constructor() {
      this.name = 'fishing boat';
      this.hits = [];
      this.position = [];
      this.length = 1;
      this.axis = 'x';
      this.isSunk = false;
    }

    isHit(index) {
      this.hits.push(index);
    }
  }

  switch (name) {
    case 'carrier':
      return new Carrier();
    case 'battleship':
      return new Battleship();
    case 'destroyer':
      return new Destroyer();
    case 'patrol boat':
      return new PatrolBoat();
    case 'fishing boat':
      return new FishingBoat();
    default:
      break;
  }
};

export default shipFactory;
