const tripplePrice = (p: number) => 3 * p;

enum Fruits {
  Apple = 20,
  Banana = 14,
  // biome-ignore lint/style/useLiteralEnumMembers: <explanation>
  Orange = Number(tripplePrice(14)),
  
}

console.log(Fruits.Apple);
console.log(Fruits.Orange);
