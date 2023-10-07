class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Linear Congruential Generator
  // Variant of a Lehman Generator
  public next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }
}

export function ShuffleArr<T>(array: T[], seed?: number): T[] {
  let currentIndex = array.length;
  let randomIndex;

  const random = new SeededRandom(seed ? seed : array.length);

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(random.next() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  let finalRand = Math.floor(random.next() * array.length);

  [array[finalRand], array[array.length - 1]] = [
    array[array.length - 1],
    array[finalRand],
  ];

  return array;
}
