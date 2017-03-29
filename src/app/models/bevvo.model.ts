export class Bevvo {
  constructor(public name: string, public ratio: Object) {
  }

  ingredients() {
    let ingredients = [];
    Object.keys(this.ratio).forEach(function(key) {
      ingredients.push(key);
    });
    return ingredients;
  }

  serve(size) {
    let servings = {};
    let ratio = this.ratio;
    Object.keys(ratio).forEach(function(key) {
      servings[key] = Math.ceil(ratio[key] * size);
    });
    return servings;
  }
}
