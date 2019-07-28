import { isNullOrUndefined } from 'util';
import { Pet } from 'models/pet';
import { Animals as AnimalConst } from 'app.constants';

const singleton = Symbol();
const singletonEnforcer = Symbol();

function buildPet(name, birthday, type) {
  const p = new Pet();
  p.name = name;
  p.birthday = new Date(birthday);
  p.type = type;
  return p;
}

class AnimalService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer)
      throw Error('Cannot construct singleton');

    const fido = buildPet('Fido', '2017-08-29', AnimalConst.DOG);
    const luna = buildPet('Luna', '1998-05-16', AnimalConst.CAT);
    const polly = buildPet('Polly', '2003-11-02', AnimalConst.PARROT);
    this.animals = [fido, luna, polly];
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new AnimalService(singletonEnforcer);
    }
    return this[singleton];
  }

  getAnimals() {
    return this.animals;
  }

  getAnimal(name) {
    return this.animals.find(animal => animal.name === name);
  }

  addAnimal(animal) {
    if (this.animals.indexOf(animal) >= 0)
      throw new Error('Animal already added.');

    this.animals.push(animal);
  }

  removeAnimal(animal) {
    const index = this.animals.indexOf(animal);
    if (index < 0) throw new Error('The animal does not exist.');

    this.animals.splice(index, 1);
  }

  updateAnimal(updatedAnimal) {
    let ref = this.animals.find(animal => animal.name === updatedAnimal.name);
    if (isNullOrUndefined(ref)) {
      this.addAnimal(updatedAnimal);
      return;
    }
    ref = updatedAnimal;
  }
}

export { AnimalService };
