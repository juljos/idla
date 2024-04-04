// Enum for better scalability and maintainability
enum Hero {
  Superman = "Superman",
  Spiderman = "Spiderman",
  Hulk = "Hulk"
}

// Class representing a superhero
class Superhero {
  private name: Hero;

  constructor(name: Hero) {
    this.name = name;
  }

  // Method to display the hero's action
  public saveTheDay(): string {
    return `${this.name} is saving the day!`;
  }
}

// Creating instances of superheroes
const superman = new Superhero(Hero.Superman);
const spiderman = new Superhero(Hero.Spiderman);
const hulk = new Superhero(Hero.Hulk);

// Example of calling a method on the superhero instance
console.log(superman.saveTheDay());
console.log(spiderman.saveTheDay());
console.log(hulk.saveTheDay());
