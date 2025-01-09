axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(function (res) {
    // handle success
    console.log(res.data)
    const dataObj = res.data

    dataObj.forEach(card => {
        const titleCard = card.title
        const urlCard = card.url
        cardContainElm.innerHTML += `
                                    <div class="col-6 col-sm-4 col-lg-3  mb-5 ">
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

    
    /*const names = dataObj.map(dataObj => dataObj.title);
    console.log(names);*/
    
  })

//DOM ELEMENT
const cardContainElm = document.getElementById("card-contain") 