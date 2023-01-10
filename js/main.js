const cardContainer = document.querySelector('[card-container-data]');
let url = 'http://localhost:3000/properties';

const renderCard = (card) => {
  cardContainer.innerHTML += ` <div class="property__card">
    <div class="property__card-preview" style="background-image: url(${card.img})">
        <div class="card-preview--first-row">
                <span class="property-type">${card.type}</span>
                <span class="property-status">${card.status}</span>
                <figure class="iconRayo">  <img class="rayo" src="${card.featured}"> </figure>
            </div>
        <div class="card-preview--second-row">
            <span class="property-price">${card.price}</span>
            <figure class="iconfavorite">  <img  src="${card.favorite}"> </figure>
            <figure class="iconcompare">  <img  src="${card.compare}"> </figure>
        </div>
    </div>
    <div class="property__card-details">
        <p class="card__details-location">${card.location}</p>
        <address class="card__details-address">
        ${card.adress}
        </address>
        <div class="owner-row">
            <div class="owner-row-left">
                <img  class="agentpic" src="./img/agentcard1.png" alt="Owner picture" />
                <p class="owner-name">${card.owner.name}</p>
            </div>
            <p class="owner-row-right">${card.owner.timeReleased}</p>
        </div>
        <div class="line"></div>
        <div class="property-features">
            <div class="property-area">
                <img src="./img/area icon.png" alt="" />
                <p class="area">${card.area}</p>
            </div>
            <div class="property-features-right">
                <div class="features-right-wrapper">
                  <img src="./img/Garageicon.svg" alt="" />
                  <span>${card.garage}</span>
                </div>
                <div class="features-right-wrapper">
                  <img src="./img/Bathroom_Icon.svg" alt="" />
                  <span>${card.bathroom}</span>
                </div>
                <div class="features-right-wrapper">
                  <img src="./img/Bedroom_Icon.svg" alt="" />
                  <span>${card.bedroom}</span>
                </div>
            </div>
        </div>
    </div>
</div> `;
};

const fetchData = () => {
  const res = fetch(url);
  res
    .then((res) => res.json())

    .then((data) =>
      data.forEach((card) => {
        renderCard(card);
      })
    );
};

fetchData();
