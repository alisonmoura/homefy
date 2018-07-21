class Furniture{

  constructor(){
    this.image;
    this.type;
    this.color;
    this.price;
  }

  findAll(){
    let furnitures = JSON.parse(localStorage.getItem('furnitures'));
    if(!furnitures) furnitures = []
    return furnitures;
  }

  create(){
    let furnitures = this.findAll();
    furnitures.push(this);
    localStorage.setItem('furnitures', JSON.stringify(furnitures));
  }

}