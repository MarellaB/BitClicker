/**
 * Manages items that the player can buy.
 * @type {Object}
 */
const itemManager = {

  /**
   * All the items available for purchase.
   * @type {Object}
   */
  ITEMS: [
    {
      name: 'potato',
      price: 1
    },
    {
      name: 'lemon',
      price: 4
    }
  ],

  /**
   * Give the given player an item if it has enough money.
   * @param {Number} itemId
   */
  buyItem(player, itemId) {
    if (player.coins >= this.ITEMS[itemId].price) {
      player.coins -= 1;
      player.addItem(itemId);
    } else {
      console.error(`You can't buy a ${this.ITEMS[itemId].name}, ya dingus! You need $${this.ITEMS[itemId].price} and only have $${player.coins}!`);
    }
  }
};

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
      amount: 0
    },
    {
      name: 'lemon',
      amount: 0
    }
  ],

  /**
   * The upgrades that the player has purchased.
   * @type {Object}
   */
  upgrades: {},

  addItem(itemId) {
    this.items[itemId].amount++;
  }

};

/**
 * Represents the entire game.
 * @type {Object}
 */
const game = {

  purchasePototoButton: null,
  purchaseLemonButton: null,

  init() {
    this.purchasePotatoButton = document.getElementById('purchasePotato');
    this.purchaseLemonButton = document.getElementById('purchaseLemon');

    this.purchasePotatoButton.addEventListener('click', this.buyPotato);
    this.purchaseLemonButton.addEventListener('click', this.buyLemon);
  },

  buyPotato() {
    itemManager.buyItem(player, 0);
  },

  buyLemon() {
    itemManager.buyItem(player, 1);
  }

};

game.init();
