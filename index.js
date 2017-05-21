/**
 * The player.
 * @type {Object}
 */
const player = {

  /**
   * The number of bitcoins the player currently has.
   * @type {Number}
   */
  coins: 1,

  /**
   * The items that the player currently has.
   * @type {Object}
   */
  items: [
    {
      name: 'potato',
      price: 1,
      generates: 0.1,
      amount: 0
    },
    {
      name: 'lemon',
      price: 4,
      generates: 1,
      amount: 0
    },
    {
      name: 'computerStick',
      price: 100,
      generates: 2,
      amount: 0
    },
    {
      name: 'dualCoreProcessor',
      price: 300,
      generates: 4,
      amount: 0
    }
  ],

  generatePerTick: 0,

  /**
   * The upgrades that the player has purchased.
   * @type {Object}
   */
  upgrades: {},

  addItem(itemId) {
    this.items[itemId].amount++;
  },

  /**
   * Give the given player an item if it has enough money.
   * @param {Number} itemId
   */
  buyItem(itemId) {
    if (this.coins >= this.items[itemId].price) {
      this.coins -= 1;
      this.items[itemId].amount++;
      this.generatePerTick += this.items[itemId].generates;
    } else {
      console.error(`You can't buy a ${this.items[itemId].name}, ya dingus! You need $${this.items[itemId].price} and only have $${player.coins}!`);
    }
  }

};

/**
 * Represents the entire game.
 * @type {Object}
 */
const game = {

  purchasePototoButton: null,
  purchaseLemonButton: null,

  generateAmount: 0,
  moneyCount: 0,

  generatePerTick: 0,

  init() {
    this.purchasePotatoButton = document.getElementById('purchasePotato');
    this.purchaseLemonButton = document.getElementById('purchaseLemon');
    this.purchaseComputerStickButton = document.getElementById('purchaseCompStick');

    this.purchasePotatoButton.addEventListener('click', this.buyPotato);
    this.purchaseLemonButton.addEventListener('click', this.buyLemon);
    this.purchaseComputerStickButton.addEventListener('click', this.buyComputerStick);
  },

  buyPotato() {
    player.buyItem(0);
  },

  buyLemon() {
    player.buyItem(1);
  },

  buyComputerStick() {
    player.buyItem(2);
  }

};

game.init();

// Update UI
setInterval(function() {
  document.getElementsByClassName('moneyCount')[0].innerHTML = player.coins;
  document.getElementsByClassName('generateAmount')[0].innerHTML = player.generatePerTick;
  document.getElementById('potatoNumb').innerHTML = player.items[0].amount;
  document.getElementById('lemonNumb').innerHTML = player.items[1].amount;
}, 100);
