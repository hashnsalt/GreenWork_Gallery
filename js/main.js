document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.photo').addEventListener('click', () => {

    const num = Math.random() * 5;
    const ranNum = Math.floor(num);
    // console.log(ranNum);

    let flexBox = document.querySelector('.flex_box');
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');

    newImg.src = `./images/thum_0${ranNum}.jpg`;
    newDiv.setAttribute ('class','gallery_img');

    flexBox.appendChild(newDiv);
    newDiv.appendChild(newImg);



    let thumbnail = document.querySelectorAll('.gallery_img');

    for(let i in thumbnail) {
      thumbnail[i].addEventListener('click', function() {
        let viewMain = document.querySelector('.view_main');

        let viewDiv = document.createElement('div');
        let viewImg = document.createElement('img');

        viewMain.style.display = 'block';
        viewImg.src = this.children[0].src;

        viewDiv.appendChild(viewImg);

        viewDiv.setAttribute('class', 'view_box');

        viewMain.appendChild(viewDiv);


        let newSpan = document.createElement('span');
        let deleteText = document.createTextNode('X');

        newSpan.appendChild(deleteText);
        newSpan.setAttribute('class','delete');
        viewDiv.appendChild(newSpan);



        let deleteBtn = document.querySelectorAll('.delete');

        for (let i=0; i<deleteBtn.length; i++) {

        deleteBtn[i].addEventListener('click', function() {

          // if(this.parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        // }

        });

      }

      });
    }

  });

});