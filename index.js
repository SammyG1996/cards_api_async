let deck_id;
const btn = document.querySelector('button');

// This will get a deck from the API
async function getADeck() {
    const {data} = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    this.deck_id = data.deck_id;
}

// This will retrieve a card from the deck
async function getCard() {
    const data = await axios.get(`http://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`);
    createCard(data);
}

// This will create the card and append to the DOM
function createCard(data) {
  const img = document.createElement('img');
  img.src = data.data.cards[0].image;
  document.querySelector('body').appendChild(img);
}

// Now You need to create a button to call the getCard() function and display a new card
btn.addEventListener('click', () => {
  getCard()

})

// This will get the deck of cards in the beggining
getADeck();


