class FurnitureRegisterController{
  
  readFurniture(furniture){
    furniture.image = document.getElementById('image').value;
    furniture.type = document.getElementById('type').value;
    furniture.color = document.getElementById('color').value;
    furniture.price = document.getElementById('price').value;
  }
  
  save(){
    let furniture = new Furniture();
    this.readFurniture(furniture);
    furniture.create();
    alert("Salvo com sucesso!")
    this.cleanForm();
    history.go(-1);
  }
  
  cleanForm(){
    document.getElementById('image').value = "";
    document.getElementById('type').value = "Tipo do Móvel";
    document.getElementById('color').value = "Cor do Móvel";
    document.getElementById('price').value = "";
  }
  
}