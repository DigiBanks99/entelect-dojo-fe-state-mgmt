import { isNullOrUndefined } from 'util';

const animals = [];

class AnimalService {
  static getAnimals() {
    return animals;
  }

  static addAnimal(animal) {
    if (animals.indexOf(animal) >= 0) throw new Error('Animal already added.');

    animals.push(animal);
  }

  static removeAnimal(animal) {
    const index = animals.indexOf(animal);
    if (index < 0) throw new Error('The animal does not exist.');

    animals.splice(index, 1);
  }

  static updateAnimal(updatedAnimal) {
    let ref = animals.find(animal => animal.name === updatedAnimal.name);
    if (isNullOrUndefined(ref))
      throw new Error(
        'The animal reference could not be found. Did you change the name?'
      );
    ref = updatedAnimal;
  }
}

export { AnimalService };
