class Ship {
  constructor(name, length) {
    this.name = name;
    this.hits = length;
    this.position = [];
    this.length = length;
    this.axis = 'x';
    this.isSunk = false;
  }

  setPosition(index) {
    switch (this.axis) {
      case 'y':
        // Comprueba si la posicion es valida en el eje Y
        if (index + (this.length - 1) * 10 > 99) {
          return;
        }
        // Mete la posicion dentro del array position para el eje Y
        for (let i = 0; i < this.length; i++) {
          this.position.push(index + 10 * i);
        }
        break;
      case 'x':
        // Comprueba si la posicion es valida en el eje X
        if (
          (index < 9 && index + this.length - 1 > 9) ||
          (index > 9 && index < 19 && index + this.length - 1 > 19) ||
          (index > 19 && index < 29 && index + this.length - 1 > 29) ||
          (index > 29 && index < 39 && index + this.length - 1 > 39) ||
          (index > 39 && index < 49 && index + this.length - 1 > 49) ||
          (index > 49 && index < 59 && index + this.length - 1 > 59) ||
          (index > 59 && index < 69 && index + this.length - 1 > 69) ||
          (index > 69 && index < 79 && index + this.length - 1 > 79) ||
          (index > 79 && index < 89 && index + this.length - 1 > 89) ||
          (index > 89 && index < 99 && index + this.length - 1 > 99)
        ) {
          return;
        }
        // Mete la posicion dentro del array position para el eje X
        for (let i = 0; i < this.length; i++) {
          this.position.push(index + i);
        }
        break;
      default:
        break;
    }
  }

  changeAxis() {
    this.axis === 'x' ? (this.axis = 'y') : (this.axis = 'x');
    console.log(this.axis);
  }

  isHit() {
    this.hits = this.hits - 1;
    // Comprueba si ha sido golpeada suficientes veces y si es asi se hunde
    if (this.hits === 0) {
      this.isSunk = true;
    }
  }
}

export default Ship;
