
export type RecipeItem = {
    name: string;
    image: string;
    children?: RecipeItem[];
};

export const trinityForceRecipe = {
    name: 'Trinity Force',
    image: '/item/trinity-force-50x.png',
    children: [
      {
        name: 'Phage',
        image: '/item/phage-30x.png',
        children: [
          {
            name: 'Ruby Crystal',
            image: '/item/ruby-crystal-22x.webp',
          },
          {
            name: 'Long Sword',
            image: '/item/long-sword-22x.webp',
          },
        ],
      },
      {
        name: 'Sheen',
        image: '/item/sheen-30x.png',
        children: [
          {
            name: 'Glowing Mote',
            image: '/item/glowing-mote-22x.png',
          },
        ],
      },
      {
        name: 'Hearthbound Axe',
        image: '/item/hearthbound-axe-30x.png',
        children: [
          {
            name: 'Long Sword',
            image: '/item/long-sword-22x.webp',
          },
          {
            name: 'Long Sword',
            image: '/item/long-sword-22x.webp',
          },
          {
            name: 'Dagger',
            image: '/item/dagger-22x.png',
          },
        ],
      },
    ],
} satisfies RecipeItem;

export const titanicHydraRecipe: RecipeItem = {
    name: "Titanic Hydra",
    image: "/item/titanic-hydra-50x.webp",
    children: [
      {
        name: "Tiamat",
        image: "/item/tiamat-30x.png",
        children: [
          {
            name: "Long Sword",
            image: "/item/long-sword-22x.webp",
          },
          {
            name: "Long Sword",
            image: "/item/long-sword-22x.webp",
          },
        ],
      },
      {
        name: "Ruby Crystal",
        image: "/item/ruby-crystal-22x.webp",
      },
    ],
  };

export const platedSteelcapsRecipe: RecipeItem = {
    name: "Plated Steelcaps",
    image: "/item/plated-steelcaps-50x.webp",
    children: [
      {
        name: "Boots",
        image: "/item/boots-30x.webp",
      },
      {
        name: "Cloth Armor",
        image: "/item/cloth-armor-30x.webp",
      },
    ],
  };