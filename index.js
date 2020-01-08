class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(loc) {
    return this.x === loc.x && this.y === loc.y;
  }
}

class Item {
  constructor(name, type, img) {
    this.name = name;
    this.type = type;
    this.img = img;
  }
}
