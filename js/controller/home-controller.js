class HomeController{

  listAllFurnitures(){

    let furnitures = new Furniture().findAll();

    let list = document.querySelector('.furnitures');

    for (let i = 0; i < furnitures.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.src = furnitures[i].image;
      div.appendChild(img);
      div.classList.add('furniture');
      list.appendChild(div);
    }

    document.getElementById('loading').classList.add('hide')

    if(furnitures.length <= 0) document.getElementById('not-found').classList.remove('hide')

  }

}