const singleton = Symbol();
const singletonEnforcer = Symbol();

class FoodService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot create singleton');
    }

    this._foodItems = {};
    this._currentId = 0;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new FoodService(singletonEnforcer);
    }

    return this[singleton];
  }

  getFoodTransactions(petName) {
    if (!this._foodItems.hasOwnProperty(petName)) {
      return [];
    }

    return this._foodItems[petName];
  }

  addFoodTransaction(petName, food) {
    if (!this._foodItems.hasOwnProperty(petName)) {
      this._foodItems[petName] = [];
    }

    return (this._foodItems[petName] = [...this._foodItems[petName], food]);
  }

  updateFoodTransaction(petName, food) {
    if (!this._foodItems.hasOwnProperty(petName)) {
      this.addFoodTransaction(petName, food);
      return;
    }

    this._foodItems[petName][food.id] = { ...food };
  }

  deleteFoodTransaction(petName, id) {
    if (!this._foodItems.hasOwnProperty(petName)) {
      return;
    }

    this._foodItems[petName] = [
      ...this._foodItems[petName].filter(food => food.id !== id)
    ];
  }
}

export { FoodService };
