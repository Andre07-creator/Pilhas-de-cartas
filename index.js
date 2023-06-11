let cardDeck = [];
let choose = 0;

function pullCard() {
  let offCard = cardDeck.shift();
  alert("Carta retirada: " + offCard);
  console.log(cardDeck.length);
}
function addCard() {
  let newCard = prompt("Informe a nova carta para ser adicionada");
  cardDeck.unshift(newCard);
}
do {
  let cards = "";
  for (let i = 0; i < cardDeck.length; i++) {
    cards += "Carta " + (i + 1) + " - " + cardDeck[i] + "\n";
  }
  choose = prompt(
    "Numero de cartas no baralho:" +
      cardDeck.length +
      "\n" +
      cards +
      " 1 -Puxar uma carta" +
      "\n" +
      "2 - Adicionar uma carta" +
      "\n" +
      "3 - Sair"
  );
  switch (choose) {
    case "1":
      pullCard();
      break;
    case "2":
      addCard();
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      prompt("Digite uma opção valida!!!");
  }
} while (choose != "3");
