const singleton = Symbol();
const singletonEnforcer = Symbol();

class ActivityService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw Error('Cannot construct singleton');
    }

    this._activities = {
      Chewy: [{ id: 0, description: 'xxx', date: new Date() }]
    };
    this._currentId = 0;
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new ActivityService(singletonEnforcer);
    }
    return this[singleton];
  }

  getActivities(petName) {
    if (this._activities.hasOwnProperty(petName)) {
      return this._activities[petName];
    }
    return [];
  }

  getActivity(petName, id) {
    return this._activities[petName].find(activity => activity.id === id);
  }

  addActivity(petName, activity) {
    if (!this._activities.hasOwnProperty(petName)) {
      this._activities[petName] = [];
    }

    activity.id = ++this._currentId;
    this._activities[petName].push(activity);
    return activity;
  }

  updateActivity(petName, id, activityToUpdate) {
    if (!this._activities.hasOwnProperty(petName)) {
      this._activities[petName] = [];
    }

    const index = this._activities[petName].findIndex(
      activity => activity.id === id
    );
    this._activities[petName][index] = activityToUpdate;
    return activityToUpdate;
  }

  removeActivity(petName, id) {
    if (!this._activities.hasOwnProperty(petName)) {
      return;
    }

    const index = this._activities[petName].findIndex(
      activity => activity.id === id
    );
    this._activities[petName].splice(index, 1);
  }
}

export { ActivityService };
