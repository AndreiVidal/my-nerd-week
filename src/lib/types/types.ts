export interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  characterId: Character[];
}

export interface Character {
  id: string;
  name: string;
  group: string;
  description: string;
  images: string;
  skills: Array<string>;
}
