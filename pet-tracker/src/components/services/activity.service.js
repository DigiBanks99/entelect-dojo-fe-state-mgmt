const singleton = Symbol();
const singletonEnforcer = Symbol();

class ActivityService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw Error('Cannot construct singleton');
    }

    this._activities = {};
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new ActivityService(singletonEnforcer);
    }
    return this[singleton];
  }

  static getActivities(petName) {
    if (this._activities[petName]) {
      return this._activities[petName];
    }
    return [];
  }

  static addActivities(petName, activity) {
    if (!this._activities[petName]) {
      this._activities[petName] = [];
    }

    this._activities[petName].push(activity);
  }
}

export { ActivityService };
