function findFirst<T>(items: T[], searchFunction: (t: T) => boolean): T {
  for (let i = 0; i < items.length; i++) {
    let item: T = items[i];
    if (searchFunction(item)) {
      return item;
    }
  }
  return null;
}

let items: number[] = [1, 4, 7, 9];

let n: number = findFirst<number>(items, (t: number) => t % 2 == 0);
console.log(n);

let items2: string[] = ["one", "two", "three"];
let s: string = findFirst<string>(items2, (s: string) => s.indexOf("wo") != -1);
console.log(s);
