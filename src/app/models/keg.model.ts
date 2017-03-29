export class Keg {
  constructor(public name: string, public totalAmount: number, public currentAmount: number) {}

  percent() {
    let percent: string = ((this.currentAmount/this.totalAmount)*100).toString() + "%";
    console.log(percent);
    return percent;
  }
}
