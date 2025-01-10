axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(function (res) {
    const dataObj = res.data

    dataObj.forEach(card => {
        const titleCard = card.title
        const urlCard = card.url
        cardContainElm.innerHTML += `
                                    <div class=" ms-col col-6 col-sm-4 col-lg-3  mb-5 ">
                                        <div class="ms-card">
                                            <img src="./img/pin.svg" alt="">
                                            <div class="ms-card-img">
                                                <img src="${urlCard}" alt="">
                                             </div>
                        
                                        <div class="ms-card-text">
                                            <p class="m-0">${titleCard}</p>
                                        </div>
                                    </div>
                                </div>`
    });
    
    const cards = document.querySelectorAll(".ms-card-img img")

    cards.forEach(card => {
      card.addEventListener("click", function(){
        const imgZoom = document.getElementById("overlay-img").src = `${card.src}`;
        console.log(imgZoom)
          overlayContainElm.classList.remove("d-none")
      })
    });


  })

//DOM ELEMENT
const cardContainElm = document.getElementById("card-contain") 
const overlayContainElm = document.getElementById("overlay-container") 
const btnCloseElm = document.getElementById("btn-close") 

btnCloseElm.addEventListener("click", function(){
  overlayContainElm.classList.add("d-none")
})
