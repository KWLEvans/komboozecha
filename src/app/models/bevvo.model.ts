export class Bevvo {
  constructor(public name: string, public size: number, public ratio: Object) {
  }

  ingredients() {
    let ingredients = [];
    Object.keys(this.ratio).forEach(function(key) {
      ingredients.push(key);
    });
    return ingredients;
  }

  serve() {
    let servings = {};
    let ratio = this.ratio;
    let size = this.size;
    Object.keys(ratio).forEach(function(key) {
      servings[key] = ratio[key] * size;
    });
    return servings;
  }
}
