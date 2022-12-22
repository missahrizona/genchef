export class GenshinDish {
  src?: string = '';
  name: string = '';
  stars?: string = '';
  effect_title?: string | undefined = '';
  type?: string = '';
  description?: string = '';
  recipe?: Recipe[] | undefined = [];
  selected?: boolean = false;
}

export class Recipe {
  ingredient: string = '';
  quantity: string = '';
}

export const GenshinDishes: GenshinDish[] = [
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_%22Pile_%27Em_Up%22.png/revision/latest/scale-to-width-down/45?cb=20210415145821',
    name: "Pile 'Em Up",
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Potato',
        quantity: '3',
      },
      {
        ingredient: 'Small Lamp Grass',
        quantity: '1',
      },
      {
        ingredient: 'Cheese',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 10~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Aaru_Mixed_Rice.png/revision/latest/scale-to-width-down/45?cb=20220928041844',
    name: 'Aaru Mixed Rice',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Glabrous Beans',
        quantity: '2',
      },
      {
        ingredient: 'Tomato',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 40~60 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Activated_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114923',
    name: 'Activated Starshroom',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description: 'Restores 800 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Adeptus%27_Temptation.png/revision/latest/scale-to-width-down/45?cb=20210415133724',
    name: "Adeptus' Temptation",
    recipe: [
      {
        ingredient: 'Ham',
        quantity: '4',
      },
      {
        ingredient: 'Crab',
        quantity: '3',
      },
      {
        ingredient: 'Shrimp Meat',
        quantity: '3',
      },
      {
        ingredient: 'Matsutake',
        quantity: '3',
      },
    ],
    stars: '5 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 260~372 and CRIT Rate by 8~12% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Adventurer%27s_Breakfast_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20210416224615',
    name: "Adventurer's Breakfast Sandwich",
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Almond_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210216225709',
    name: 'Almond Tofu',
    recipe: [
      {
        ingredient: 'Milk',
        quantity: '3',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
      {
        ingredient: 'Almond',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 66~95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Apple_Cider.png/revision/latest/scale-to-width-down/45?cb=20201126235210',
    name: 'Apple Cider',
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26% of Max HP to the selected character and regenerates 570 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Apple.png/revision/latest/scale-to-width-down/45?cb=20210113032853',
    name: 'Apple',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description: 'Restores 300 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Baklava.png/revision/latest/scale-to-width-down/45?cb=20220929125056',
    name: 'Baklava',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Ajilenakh Nut',
        quantity: '2',
      },
      {
        ingredient: 'Butter',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 10~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Item_Bamboo_Shoot_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417152640',
    name: 'Bamboo Shoot Soup',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Ham',
        quantity: '2',
      },
      {
        ingredient: 'Bamboo Shoot',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character. Regenerates 450~790 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Barbatos_Ratatouille.png/revision/latest/scale-to-width-down/45?cb=20210415134134',
    name: 'Barbatos Ratatouille',
    recipe: [
      {
        ingredient: 'Carrot',
        quantity: '4',
      },
      {
        ingredient: 'Potato',
        quantity: '4',
      },
      {
        ingredient: 'Onion',
        quantity: '4',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' gliding and sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Berry_%26_Mint_Burst.png/revision/latest/scale-to-width-down/45?cb=20201126235056',
    name: 'Berry & Mint Burst',
    stars: '2 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 16% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Berry_Mizu_Manjuu.png/revision/latest/scale-to-width-down/45?cb=20211014000649',
    name: 'Berry Mizu Manjuu',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '2',
      },
      {
        ingredient: 'Berry',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP and regenerates 300~470 HP every 5 seconds for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Bird_Egg_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042636',
    name: 'Bird Egg Sushi',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
      {
        ingredient: 'Rice',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/81/Item_Biryani.png/revision/latest/scale-to-width-down/45?cb=20220825090905',
    name: 'Biryani',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '4',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Spice',
        quantity: '2',
      },
      {
        ingredient: 'Padisarah',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dish',
    description:
      "Increases all party members' DEF by 215~308 and healing effects by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/31/Item_Black-Back_Perch_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416221152',
    name: 'Black-Back Perch Stew',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
      {
        ingredient: 'Violetgrass',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character and regenerates 450~790 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Bountiful_Year.png/revision/latest/scale-to-width-down/45?cb=20220107162532',
    name: 'Bountiful Year',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '4',
      },
      {
        ingredient: 'Carrot',
        quantity: '4',
      },
      {
        ingredient: 'Onion',
        quantity: '2',
      },
      {
        ingredient: 'Violetgrass',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Braised_Meat.png/revision/latest/scale-to-width-down/45?cb=20211004223751',
    name: 'Braised Meat',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
      {
        ingredient: 'Potato',
        quantity: '2',
      },
      {
        ingredient: 'Onion',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' Physical DMG by 20~40% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Butter_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090911',
    name: 'Butter Chicken',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '3',
      },
      {
        ingredient: 'Tomato',
        quantity: '3',
      },
      {
        ingredient: 'Butter',
        quantity: '1',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dish',
    description:
      "Increases all party members' ATK by 160~228 for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Butter_Crab.png/revision/latest/scale-to-width-down/45?cb=20210723024717',
    name: 'Butter Crab',
    recipe: [
      {
        ingredient: 'Butter',
        quantity: '4',
      },
      {
        ingredient: 'Crab',
        quantity: '4',
      },
      {
        ingredient: 'Seagrass',
        quantity: '2',
      },
      {
        ingredient: 'Matsutake',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' DEF by 215~308 and healing effects by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Calla_Lily_Seafood_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416221719',
    name: 'Calla Lily Seafood Soup',
    recipe: [
      {
        ingredient: 'Crab',
        quantity: '4',
      },
      {
        ingredient: 'Calla Lily',
        quantity: '1',
      },
      {
        ingredient: 'Mint',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Candied_Ajilenakh_Nut.png/revision/latest/scale-to-width-down/45?cb=20220928041846',
    name: 'Candied Ajilenakh Nut',
    recipe: [
      {
        ingredient: 'Ajilenakh Nut',
        quantity: '4',
      },
      {
        ingredient: 'Almond',
        quantity: '2',
      },
      {
        ingredient: 'Butter',
        quantity: '2',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Item_Charcoal-Baked_Ajilenakh_Cake.png/revision/latest/scale-to-width-down/45?cb=20220928041848',
    name: 'Charcoal-Baked Ajilenakh Cake',
    recipe: [
      {
        ingredient: 'Ajilenakh Nut',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
      {
        ingredient: 'Jam',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Chicken_Tofu_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210609043702',
    name: 'Chicken Tofu Pudding',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '4',
      },
      {
        ingredient: 'Ham',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Chicken-Mushroom_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210109214805',
    name: 'Chicken-Mushroom Skewer',
    recipe: [
      {
        ingredient: 'Mushroom',
        quantity: '1',
      },
      {
        ingredient: 'Fowl',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Chili-Mince_Cornbread_Buns.png/revision/latest/scale-to-width-down/45?cb=20211001012931',
    name: 'Chili-Mince Cornbread Buns',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield strength by 25~35% and DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Cold_Cut_Platter.png/revision/latest/scale-to-width-down/45?cb=20210416221537',
    name: 'Cold Cut Platter',
    recipe: [
      {
        ingredient: 'Ham',
        quantity: '1',
      },
      {
        ingredient: 'Bacon',
        quantity: '1',
      },
      {
        ingredient: 'Sausage',
        quantity: '1',
      },
      {
        ingredient: 'Mint',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' Physical DMG by 20~40% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210416223708',
    name: 'Come and Get It',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Rice',
        quantity: '3',
      },
      {
        ingredient: 'Tofu',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 10~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Crab_Roe_Kourayaki.png/revision/latest/scale-to-width-down/45?cb=20210723044428',
    name: 'Crab Roe Kourayaki',
    recipe: [
      {
        ingredient: 'Crab',
        quantity: '1',
      },
      {
        ingredient: 'Crab Roe',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 66~95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Crab_Roe_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210428163019',
    name: 'Crab Roe Tofu',
    recipe: [
      {
        ingredient: 'Crab Roe',
        quantity: '1',
      },
      {
        ingredient: 'Tofu',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Crab%2C_Ham_%26_Veggie_Bake.png/revision/latest/scale-to-width-down/45?cb=20210415150007',
    name: 'Crab, Ham & Veggie Bake',
    recipe: [
      {
        ingredient: 'Crab Roe',
        quantity: '1',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
      {
        ingredient: 'Cream',
        quantity: '1',
      },
      {
        ingredient: 'Cabbage',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Cream_Stew.png/revision/latest/scale-to-width-down/45?cb=20210417153442',
    name: 'Cream Stew',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Cream',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Item_Crispy_Potato_Shrimp_Platter.png/revision/latest/scale-to-width-down/45?cb=20210317031656',
    name: 'Crispy Potato Shrimp Platter',
    recipe: [
      {
        ingredient: 'Mint',
        quantity: '4',
      },
      {
        ingredient: 'Shrimp Meat',
        quantity: '4',
      },
      {
        ingredient: 'Potato',
        quantity: '3',
      },
      {
        ingredient: 'Berry',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character and regenerates 450~790 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Crystal_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210417155020',
    name: 'Crystal Shrimp',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '3',
      },
      {
        ingredient: 'Shrimp Meat',
        quantity: '3',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP to the selected character and regenerates 300~470 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Cured_Pork_Dry_Hotpot.png/revision/latest/scale-to-width-down/45?cb=20210428163022',
    name: 'Cured Pork Dry Hotpot',
    recipe: [
      {
        ingredient: 'Ham',
        quantity: '2',
      },
      {
        ingredient: 'Matsutake',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '1',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 10~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Curry_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20220825090913',
    name: 'Curry Shrimp',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '3',
      },
      {
        ingredient: 'Onion',
        quantity: '2',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP and an additional 900~1,500 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/83/Item_Dango_Milk.png/revision/latest/scale-to-width-down/45?cb=20210904020630',
    name: 'Dango Milk',
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26% of Max HP to the selected character and regenerates 570 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/06/Item_Dendrocide_Potion.png/revision/latest/scale-to-width-down/45?cb=20220825142035',
    name: 'Dendrocide Potion',
    recipe: [
      {
        ingredient: 'Crystal Core',
        quantity: '1',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Dendro RES Up',
    type: 'Potions',
    description: "Increases all party members' Dendro RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Desiccant_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221148',
    name: 'Desiccant Potion',
    recipe: [
      {
        ingredient: 'Butterfly Wings',
        quantity: '1',
      },
      {
        ingredient: 'Lotus Head',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Hydro RES Up',
    type: 'Potions',
    description: "Increases all party members' Hydro RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dragon_Beard_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220107005745',
    name: 'Dragon Beard Noodles',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '4',
      },
      {
        ingredient: 'Fowl',
        quantity: '2',
      },
      {
        ingredient: 'Mushroom',
        quantity: '2',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Dry-Braised_Salted_Fish.png/revision/latest/scale-to-width-down/45?cb=20210723020230',
    name: 'Dry-Braised Salted Fish',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '1',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Dustproof_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221151',
    name: 'Dustproof Potion',
    recipe: [
      {
        ingredient: 'Butterfly Wings',
        quantity: '1',
      },
      {
        ingredient: 'Cor Lapis',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Geo RES Up',
    type: 'Potions',
    description: "Increases all party members' Geo RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Item_Egg_Roll.png/revision/latest/scale-to-width-down/45?cb=20210723020323',
    name: 'Egg Roll',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Fish_With_Cream_Sauce.png/revision/latest/scale-to-width-down/45?cb=20220827083309',
    name: 'Fish With Cream Sauce',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Milk',
        quantity: '2',
      },
      {
        ingredient: 'Mint',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP to the selected character and regenerates 300~470 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Fisherman%27s_Toast.png/revision/latest/scale-to-width-down/45?cb=20210417153848',
    name: "Fisherman's Toast",
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Tomato',
        quantity: '2',
      },
      {
        ingredient: 'Onion',
        quantity: '1',
      },
      {
        ingredient: 'Milk',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 88~126 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/57/Item_Five_Pickled_Treasures.png/revision/latest/scale-to-width-down/45?cb=20211124040507',
    name: 'Five Pickled Treasures',
    recipe: [
      {
        ingredient: 'Radish',
        quantity: '2',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '2',
      },
      {
        ingredient: 'Seagrass',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 70~100 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Flaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20201202043258',
    name: 'Flaming Essential Oil',
    recipe: [
      {
        ingredient: 'Frog (Material)',
        quantity: '1',
      },
      {
        ingredient: 'Flaming Flower Stamen',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Pyro DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Pyro DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Flaming_Red_Bolognese.png/revision/latest/scale-to-width-down/45?cb=20210417154111',
    name: 'Flaming Red Bolognese',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Tomato',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP to the selected character and regenerates 300~470 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_Forest_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20220825142037',
    name: 'Forest Essential Oil',
    recipe: [
      {
        ingredient: 'Lizard Tail',
        quantity: '1',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Dendro DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Dendro DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Item_Fragrant_Mashed_Potatoes.png/revision/latest/scale-to-width-down/45?cb=20210317174119',
    name: 'Fragrant Mashed Potatoes',
    recipe: [
      {
        ingredient: 'Potato',
        quantity: '6',
      },
      {
        ingredient: 'Cream',
        quantity: '4',
      },
      {
        ingredient: 'Pepper',
        quantity: '3',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154256',
    name: 'Fried Radish Balls',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Radish',
        quantity: '2',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 66~95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Frosting_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221111',
    name: 'Frosting Essential Oil',
    recipe: [
      {
        ingredient: 'Lizard Tail',
        quantity: '1',
      },
      {
        ingredient: 'Mist Flower Corolla',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Cryo DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Cryo DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Item_Frostshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109221144',
    name: 'Frostshield Potion',
    recipe: [
      {
        ingredient: 'Crystal Core',
        quantity: '1',
      },
      {
        ingredient: 'Mist Flower Corolla',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Cryo RES Up',
    type: 'Potions',
    description: "Increases all party members' Cryo RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Fruits_of_the_Festival.png/revision/latest/scale-to-width-down/45?cb=20220928041838',
    name: 'Fruits of the Festival',
    recipe: [
      {
        ingredient: 'Wolfhook',
        quantity: '2',
      },
      {
        ingredient: 'Sunsettia',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Healing Bonus by 15~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Fullmoon_Egg.png/revision/latest/scale-to-width-down/45?cb=20210216221738',
    name: 'Fullmoon Egg',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '4',
      },
      {
        ingredient: 'Shrimp Meat',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Golden_Chicken_Burger.png/revision/latest/scale-to-width-down/45?cb=20210317173935',
    name: 'Golden Chicken Burger',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Butter',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Golden_Crab.png/revision/latest/scale-to-width-down/45?cb=20210415145849',
    name: 'Golden Crab',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '5',
      },
      {
        ingredient: 'Flour',
        quantity: '5',
      },
      {
        ingredient: 'Crab',
        quantity: '4',
      },
      {
        ingredient: 'Salt',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' DEF by 215~308 and healing effects by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Golden_Fried_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210317174040',
    name: 'Golden Fried Chicken',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '4',
      },
      {
        ingredient: 'Butter',
        quantity: '4',
      },
      {
        ingredient: 'Pepper',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Golden_Shrimp_Balls.png/revision/latest/scale-to-width-down/45?cb=20210415144229',
    name: 'Golden Shrimp Balls',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '5',
      },
      {
        ingredient: 'Potato',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Goulash.png/revision/latest/scale-to-width-down/45?cb=20210416223513',
    name: 'Goulash',
    recipe: [
      {
        ingredient: 'Chilled Meat',
        quantity: '2',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
      {
        ingredient: 'Tomato',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Sheer Cold Resistance',
    type: "Adventurer's Dishes",
    description:
      'Slightly decreases~Decreases the rate of Sheer Cold accumulation for all party members for 900s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210109215631',
    name: 'Grilled Tiger Fish',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '1',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2b/Item_Grilled_Unagi_Fillet.png/revision/latest/scale-to-width-down/45?cb=20210901042622',
    name: 'Grilled Unagi Fillet',
    recipe: [
      {
        ingredient: 'Eel Meat',
        quantity: '3',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP and an additional 900~1,500 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Gushing_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221048',
    name: 'Gushing Essential Oil',
    recipe: [
      {
        ingredient: 'Lizard Tail',
        quantity: '1',
      },
      {
        ingredient: 'Dandelion Seed',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Anemo DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Anemo DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Heatshield_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223447',
    name: 'Heatshield Potion',
    recipe: [
      {
        ingredient: 'Butterfly Wings',
        quantity: '1',
      },
      {
        ingredient: 'Flaming Flower Stamen',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Pyro RES Up',
    type: 'Potions',
    description: "Increases all party members' Pyro RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Item_Holy_Water.png/revision/latest/scale-to-width-down/45?cb=20201126234926',
    name: 'Holy Water',
    stars: '3 Stars',
    type: 'Recovery Dishes',
    description: '\u00e2\u20ac\u2039',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Imported_Poultry.png/revision/latest/scale-to-width-down/45?cb=20210723065349',
    name: 'Imported Poultry',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '4',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 10~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Item_Insulation_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223433',
    name: 'Insulation Potion',
    recipe: [
      {
        ingredient: 'Butterfly Wings',
        quantity: '1',
      },
      {
        ingredient: 'Electro Crystal',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Electro RES Up',
    type: 'Potions',
    description: "Increases all party members' Electro RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Invigorating_Kitty_Meal.png/revision/latest/scale-to-width-down/45?cb=20210901042522',
    name: 'Invigorating Kitty Meal',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '4',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Seagrass',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character. Regenerates 450~790 HP every 5s for the next 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Jade_Parcels.png/revision/latest/scale-to-width-down/45?cb=20210415153732',
    name: 'Jade Parcels',
    recipe: [
      {
        ingredient: 'Lotus Head',
        quantity: '3',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '2',
      },
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Item_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415134551',
    name: 'Jewelry Soup',
    recipe: [
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
      {
        ingredient: 'Tofu',
        quantity: '2',
      },
      {
        ingredient: 'Lotus Head',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 88~126 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Jueyun_Chili_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415134823',
    name: 'Jueyun Chili Chicken',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '2',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 6~12% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Jueyun_Guoba.png/revision/latest/scale-to-width-down/45?cb=20210417152459',
    name: 'Jueyun Guoba',
    recipe: [
      {
        ingredient: 'Horsetail',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '2',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' Physical DMG by 20~40% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Katsu_Sandwich.png/revision/latest/scale-to-width-down/45?cb=20220330022422',
    name: 'Katsu Sandwich',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Cabbage',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 66~95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Konda_Cuisine.png/revision/latest/scale-to-width-down/45?cb=20210723021501',
    name: 'Konda Cuisine',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '3',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '2',
      },
      {
        ingredient: 'Mushroom',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Lambad_Fish_Roll.png/revision/latest/scale-to-width-down/45?cb=20220825111652',
    name: 'Lambad Fish Roll',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '1',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Item_Delicious_Come_and_Get_It.png/revision/latest/scale-to-width-down/45?cb=20210417151300',
    name: 'Lantern Rite Special Come and Get It',
    stars: '3 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Delicious_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/45?cb=20210417154310',
    name: 'Lantern Rite Special Fried Radish Balls',
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3b/Item_Delicious_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/45?cb=20210415132140',
    name: 'Lantern Rite Special Grilled Tiger Fish',
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 10% of Max HP and an additional 1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Delicious_Jewelry_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415141521',
    name: 'Lantern Rite Special Jewelry Soup',
    stars: '2 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 126 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Delicious_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210417155207',
    name: 'Lantern Rite Special Lotus Seed and Bird Egg Soup',
    stars: '2 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' sprinting Stamina consumption by 25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Delicious_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415132153',
    name: 'Lantern Rite Special Noodles with Mountain Delicacies',
    stars: '2 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 60 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Delicious_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415183048',
    name: 'Lantern Rite Special Triple-Layered Consomm\u00c3\u00a9',
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' Shield strength by 30%.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Lotus_Flower_Crisp.png/revision/latest/scale-to-width-down/45?cb=20210416223628',
    name: 'Lotus Flower Crisp',
    recipe: [
      {
        ingredient: 'Almond',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Butter',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/45?cb=20210416223545',
    name: 'Lotus Seed and Bird Egg Soup',
    recipe: [
      {
        ingredient: 'Lotus Head',
        quantity: '1',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Masala_Cheese_Balls.png/revision/latest/scale-to-width-down/45?cb=20220826003217',
    name: 'Masala Cheese Balls',
    recipe: [
      {
        ingredient: 'Potato',
        quantity: '2',
      },
      {
        ingredient: 'Cheese',
        quantity: '1',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dish',
    description:
      "Increases all party members' CRIT Rate by 6~12% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/1/15/Item_Matsutake_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210415135143',
    name: 'Matsutake Meat Rolls',
    recipe: [
      {
        ingredient: 'Matsutake',
        quantity: '2',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP and an additional 900~1,500 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Meat_Lovers%27_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20220826002637',
    name: "Meat Lovers' Mushroom Pizza",
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '4',
      },
      {
        ingredient: 'Mushroom',
        quantity: '3',
      },
      {
        ingredient: 'Cheese',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dish',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Milky_Mushroom_Crisp_Tower.png/revision/latest/scale-to-width-down/45?cb=20220826002135',
    name: 'Milky Mushroom Crisp Tower',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '4',
      },
      {
        ingredient: 'Mushroom',
        quantity: '3',
      },
      {
        ingredient: 'Cheese',
        quantity: '2',
      },
      {
        ingredient: 'Cream',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    type: 'Recovery Dish',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/79/Item_Mint_Jelly.png/revision/latest/scale-to-width-down/45?cb=20210317031658',
    name: 'Mint Jelly',
    recipe: [
      {
        ingredient: 'Mint',
        quantity: '1',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Mint_Salad.png/revision/latest/scale-to-width-down/45?cb=20210317031657',
    name: 'Mint Salad',
    recipe: [
      {
        ingredient: 'Mint',
        quantity: '4',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 66~95 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Minty_Bean_Soup.png/revision/latest/scale-to-width-down/45?cb=20220824135810',
    name: 'Minty Bean Soup',
    recipe: [
      {
        ingredient: 'Glabrous Beans',
        quantity: '2',
      },
      {
        ingredient: 'Mint',
        quantity: '2',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Minty_Meat_Rolls.png/revision/latest/scale-to-width-down/45?cb=20210317031656',
    name: 'Minty Meat Rolls',
    recipe: [
      {
        ingredient: 'Mint',
        quantity: '4',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' gliding and sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Miso_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723020354',
    name: 'Miso Soup',
    recipe: [
      {
        ingredient: 'Tofu',
        quantity: '1',
      },
      {
        ingredient: 'Seagrass',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP to the selected character and regenerates 210~300 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Mixed_Yakisoba.png/revision/latest/scale-to-width-down/45?cb=20210723022920',
    name: 'Mixed Yakisoba',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Mondstadt_Grilled_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416223406',
    name: 'Mondstadt Grilled Fish',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '1',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Mondstadt_Hash_Brown.png/revision/latest/scale-to-width-down/45?cb=20210416221824',
    name: 'Mondstadt Hash Brown',
    recipe: [
      {
        ingredient: 'Pinecone',
        quantity: '2',
      },
      {
        ingredient: 'Potato',
        quantity: '1',
      },
      {
        ingredient: 'Jam',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/38/Item_Moon_Pie.png/revision/latest/scale-to-width-down/45?cb=20210415150115',
    name: 'Moon Pie',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '4',
      },
      {
        ingredient: 'Butter',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield Strength by 25~35% and DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Mora_Meat.png/revision/latest/scale-to-width-down/45?cb=20210416223339',
    name: 'Mora Meat',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '1',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_More-and-More.png/revision/latest/scale-to-width-down/45?cb=20210901042547',
    name: 'More-and-More',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Bacon',
        quantity: '2',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '1',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' Physical DMG by 20~40% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3c/Item_Mushroom_Hodgepodge.png/revision/latest/scale-to-width-down/45?cb=20220825073930',
    name: 'Mushroom Hodgepodge',
    recipe: [
      {
        ingredient: 'Rukkhashava Mushrooms',
        quantity: '1',
      },
      {
        ingredient: 'Mushroom',
        quantity: '1',
      },
      {
        ingredient: 'Starshroom',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      'Increases all party members\u00e2\u20ac\u2122 DEF by 88~126 for 300s. In Co-Op Mode, this effect only applies to your own character(s).',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210415133922',
    name: 'Mushroom Pizza',
    recipe: [
      {
        ingredient: 'Mushroom',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Cheese',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character. Regenerates 450~790 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Noodles_with_Mountain_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210415131216',
    name: 'Noodles with Mountain Delicacies',
    recipe: [
      {
        ingredient: 'Mushroom',
        quantity: '3',
      },
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 40~60 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/80/Item_Northern_Apple_Stew.png/revision/latest/scale-to-width-down/45?cb=20210416224228',
    name: 'Northern Apple Stew',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Apple',
        quantity: '3',
      },
      {
        ingredient: 'Butter',
        quantity: '1',
      },
      {
        ingredient: 'Pepper',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/03/Item_Northern_Smoked_Chicken.png/revision/latest/scale-to-width-down/45?cb=20210415135238',
    name: 'Northern Smoked Chicken',
    recipe: [
      {
        ingredient: 'Smoked Fowl',
        quantity: '1',
      },
      {
        ingredient: 'Onion',
        quantity: '1',
      },
      {
        ingredient: 'Cabbage',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 40~60 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Item_Omelette_Rice.png/revision/latest/scale-to-width-down/45?cb=20210901042546',
    name: 'Omelette Rice',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '4',
      },
      {
        ingredient: 'Rice',
        quantity: '3',
      },
      {
        ingredient: 'Tomato',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      'Decreases Stamina depleted by climbing and sprinting for all party members by 15~25% for 900s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Oncidium_Tofu.png/revision/latest/scale-to-width-down/45?cb=20210927052314',
    name: 'Oncidium Tofu',
    recipe: [
      {
        ingredient: 'Tofu',
        quantity: '4',
      },
      {
        ingredient: 'Bamboo Shoot',
        quantity: '2',
      },
      {
        ingredient: 'Ham',
        quantity: '1',
      },
      {
        ingredient: 'Fowl',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 70~100 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Onigiri.png/revision/latest/scale-to-width-down/45?cb=20210723020415',
    name: 'Onigiri',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '1',
      },
      {
        ingredient: 'Seagrass',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP to the selected character and regenerates 300~470 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Padisarah_Pudding.png/revision/latest/scale-to-width-down/45?cb=20220928041842',
    name: 'Padisarah Pudding',
    recipe: [
      {
        ingredient: 'Padisarah',
        quantity: '2',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '1',
      },
      {
        ingredient: 'Milk',
        quantity: '1',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' climbing and sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Panipuri.png/revision/latest/scale-to-width-down/45?cb=20220825231705',
    name: 'Panipuri',
    recipe: [
      {
        ingredient: 'Potato',
        quantity: '2',
      },
      {
        ingredient: 'Glabrous Beans',
        quantity: '2',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Pita_Pocket.png/revision/latest/scale-to-width-down/45?cb=20220824131338',
    name: 'Pita Pocket',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Tomato',
        quantity: '2',
      },
      {
        ingredient: 'Milk',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Pop%27s_Teas.png/revision/latest/scale-to-width-down/45?cb=20201210063332',
    name: "Pop's Teas",
    stars: '1 Star',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 14% of Max HP to the selected character and regenerates 350 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Potato_Boat.png/revision/latest/scale-to-width-down/45?cb=20220826001510',
    name: 'Potato Boat',
    recipe: [
      {
        ingredient: 'Potato',
        quantity: '4',
      },
      {
        ingredient: 'Rukkhashava Mushrooms',
        quantity: '2',
      },
      {
        ingredient: 'Cheese',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Qingce_Stir_Fry.png/revision/latest/scale-to-width-down/45?cb=20210415142401',
    name: 'Qingce Stir Fry',
    recipe: [
      {
        ingredient: 'Mushroom',
        quantity: '3',
      },
      {
        ingredient: 'Lotus Head',
        quantity: '2',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
      {
        ingredient: 'Cabbage',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Radish_Veggie_Soup.png/revision/latest/scale-to-width-down/45?cb=20210415140822',
    name: 'Radish Veggie Soup',
    recipe: [
      {
        ingredient: 'Radish',
        quantity: '1',
      },
      {
        ingredient: 'Mint',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP to the selected character and regenerates 210~300 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Radish_and_Fish_Stew.png/revision/latest/scale-to-width-down/45?cb=20211014000639',
    name: 'Radish and Fish Stew',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '2',
      },
      {
        ingredient: 'Radish',
        quantity: '2',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 6~12% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Item_Rainbow_Aster.png/revision/latest/scale-to-width-down/45?cb=20220330022419',
    name: 'Rainbow Aster',
    recipe: [
      {
        ingredient: 'Milk',
        quantity: '3',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '2',
      },
      {
        ingredient: 'Calla Lily',
        quantity: '2',
      },
      {
        ingredient: 'Mint',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' gliding and sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Rice_Buns.png/revision/latest/scale-to-width-down/45?cb=20210609051846',
    name: 'Rice Buns',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '1',
      },
      {
        ingredient: 'Horsetail',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP and an additional 800~1,200 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/21/Item_Rice_Cake_Soup.png/revision/latest/scale-to-width-down/45?cb=20210723024719',
    name: 'Rice Cake Soup',
    recipe: [
      {
        ingredient: 'Sausage',
        quantity: '2',
      },
      {
        ingredient: 'Tofu',
        quantity: '1',
      },
      {
        ingredient: 'Fish',
        quantity: '1',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 165~235 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Rice_Pudding.png/revision/latest/scale-to-width-down/45?cb=20210930214439',
    name: 'Rice Pudding',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '3',
      },
      {
        ingredient: 'Rice',
        quantity: '2',
      },
      {
        ingredient: 'Milk',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Increase',
    type: "Adventurer's Dishes",
    description: 'Restores 70~100 Stamina.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/cc/Item_Rose_Custard.png/revision/latest/scale-to-width-down/45?cb=20221102161834',
    name: 'Rose Custard',
    recipe: [
      {
        ingredient: 'Milk',
        quantity: '2',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP and regenerates 300~470 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Sakura_Mochi.png/revision/latest/scale-to-width-down/45?cb=20210723020811',
    name: 'Sakura Mochi',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '4',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
      {
        ingredient: 'Sakura Bloom',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/56/Item_Sakura_Shrimp_Crackers.png/revision/latest/scale-to-width-down/45?cb=20211124035943',
    name: 'Sakura Shrimp Crackers',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '3',
      },
      {
        ingredient: 'Potato',
        quantity: '3',
      },
      {
        ingredient: 'Sakura Bloom',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' HP by 20%~25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Sakura_Tempura.png/revision/latest/scale-to-width-down/45?cb=20210723021302',
    name: 'Sakura Tempura',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '4',
      },
      {
        ingredient: 'Lavender Melon',
        quantity: '2',
      },
      {
        ingredient: 'Sakura Bloom',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield strength by 20~30% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Samosa.png/revision/latest/scale-to-width-down/45?cb=20221208010516',
    name: 'Samosa',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '1',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP to the selected character and an additional 900~1,500 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Sangayaki.png/revision/latest/scale-to-width-down/45?cb=20220219034936',
    name: 'Sangayaki',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Sashimi_Platter.png/revision/latest/scale-to-width-down/45?cb=20210723061557',
    name: 'Sashimi Platter',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '4',
      },
      {
        ingredient: 'Shrimp Meat',
        quantity: '4',
      },
      {
        ingredient: 'Crab',
        quantity: '4',
      },
      {
        ingredient: 'Radish',
        quantity: '2',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Satisfying_Salad.png/revision/latest/scale-to-width-down/45?cb=20210417153219',
    name: 'Satisfying Salad',
    recipe: [
      {
        ingredient: 'Cabbage',
        quantity: '2',
      },
      {
        ingredient: 'Apple',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
      {
        ingredient: 'Potato',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT rate by 6~12% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Saut%C3%A9ed_Matsutake.png/revision/latest/scale-to-width-down/45?cb=20201113104232',
    name: 'Saut\u00c3\u00a9ed Matsutake',
    recipe: [
      {
        ingredient: 'Matsutake',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Pinecone',
        quantity: '2',
      },
      {
        ingredient: 'Butter',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Scorched_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220827114922',
    name: 'Scorched Starshroom',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description: 'Restores 1 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/75/Item_Selva_Salad.png/revision/latest/scale-to-width-down/45?cb=20220825090918',
    name: 'Selva Salad',
    recipe: [
      {
        ingredient: 'Zaytun Peach',
        quantity: '2',
      },
      {
        ingredient: 'Mint',
        quantity: '2',
      },
      {
        ingredient: 'Sumeru Rose',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Shawarma_Wrap.png/revision/latest/scale-to-width-down/45?cb=20220825090916',
    name: 'Shawarma Wrap',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dish',
    description:
      "Increases all party members' ATK by 66~95 for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Shocking_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109223428',
    name: 'Shocking Essential Oil',
    recipe: [
      {
        ingredient: 'Frog (Material)',
        quantity: '1',
      },
      {
        ingredient: 'Electro Crystal',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Electro DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Electro DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Soba_Noodles.png/revision/latest/scale-to-width-down/45?cb=20211014000641',
    name: 'Soba Noodles',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '1',
      },
      {
        ingredient: 'Seagrass',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 8~10% of Max HP to the selected character and regenerates 210~300 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Sparkling_Berry_Juice.png/revision/latest/scale-to-width-down/45?cb=20220929193634',
    name: 'Sparkling Berry Juice',
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description:
      'Revives a character and restores 15% of Max HP, then restores an additional 550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e4/Item_Special_Mushroom_Pizza.png/revision/latest/scale-to-width-down/45?cb=20210918205436',
    name: 'Special Mushroom Pizza',
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 28% of Max HP to the selected character. Regenerates 620 HP every 5s for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Item_Squirrel_Fish.png/revision/latest/scale-to-width-down/45?cb=20210416224105',
    name: 'Squirrel Fish',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '4',
      },
      {
        ingredient: 'Tomato',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Item_Starshroom.png/revision/latest/scale-to-width-down/45?cb=20220330031844',
    name: 'Starshroom',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description: 'Restores 300 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Steak.png/revision/latest/scale-to-width-down/45?cb=20210416223306',
    name: 'Steak',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '2',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Sticky_Honey_Roast.png/revision/latest/scale-to-width-down/45?cb=20210416222832',
    name: 'Sticky Honey Roast',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party member's climbing and sprinting Stamina consumption by 15~25% for 900s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Stir-Fried_Filet.png/revision/latest/scale-to-width-down/45?cb=20210415140909',
    name: 'Stir-Fried Filet',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '1',
      },
      {
        ingredient: 'Jueyun Chili',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Stir-Fried_Fish_Noodles.png/revision/latest/scale-to-width-down/45?cb=20210428163030',
    name: 'Stir-Fried Fish Noodles',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 18~22% of Max HP and regenerates 300~470 HP every 5 seconds for 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/62/Item_Stir-Fried_Shrimp.png/revision/latest/scale-to-width-down/45?cb=20210609050922',
    name: 'Stir-Fried Shrimp',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '3',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield strength by 20~30% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/70/Item_Stone_Harbor_Delicacies.png/revision/latest/scale-to-width-down/45?cb=20210216221804',
    name: 'Stone Harbor Delicacies',
    recipe: [
      {
        ingredient: 'Potato',
        quantity: '2',
      },
      {
        ingredient: 'Violetgrass',
        quantity: '1',
      },
      {
        ingredient: 'Matsutake',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' CRIT Rate by 6~12% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/0/08/Item_Streaming_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221058',
    name: 'Streaming Essential Oil',
    recipe: [
      {
        ingredient: 'Frog (Material)',
        quantity: '1',
      },
      {
        ingredient: 'Lotus Head',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Hydro DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Hydro DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Sunset_Berry_Tea.png/revision/latest/scale-to-width-down/45?cb=20220825235427',
    name: 'Sunset Berry Tea',
    recipe: [
      {
        ingredient: 'Sunsettia',
        quantity: '3',
      },
      {
        ingredient: 'Berry',
        quantity: '3',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dish',
    description:
      "Increases all party members' ATK by 160~228 for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/45/Item_Sunsettia.png/revision/latest/scale-to-width-down/45?cb=20210109214706',
    name: 'Sunsettia',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description: 'Restores 300 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Item_Sunshine_Sprat.png/revision/latest/scale-to-width-down/45?cb=20210417152138',
    name: 'Sunshine Sprat',
    recipe: [
      {
        ingredient: 'Butter',
        quantity: '3',
      },
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
      {
        ingredient: 'Small Lamp Grass',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield strength by 20~30% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/1/12/Item_Sweet_Madame.png/revision/latest/scale-to-width-down/45?cb=20210415134415',
    name: 'Sweet Madame',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '2',
      },
      {
        ingredient: 'Sweet Flower',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP and an additional 900~1,500 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Sweet_Shrimp_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210901042559',
    name: 'Sweet Shrimp Sushi',
    recipe: [
      {
        ingredient: 'Shrimp Meat',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/4/49/Item_Tahchin.png/revision/latest/scale-to-width-down/45?cb=20220825090812',
    name: 'Tahchin',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '4',
      },
      {
        ingredient: 'Fowl',
        quantity: '2',
      },
      {
        ingredient: 'Fish',
        quantity: '2',
      },
      {
        ingredient: 'Padisarah',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character and regenerates 450~790 HP every 5s for 30s.',
    effect_title: '',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Taiyaki.png/revision/latest/scale-to-width-down/45?cb=20210901042544',
    name: 'Taiyaki',
    recipe: [
      {
        ingredient: 'Sunsettia',
        quantity: '3',
      },
      {
        ingredient: 'Milk',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Regeneration',
    type: 'Recovery Dishes',
    description:
      'Restores 26~30% of Max HP to the selected character. Regenerates 450~790 HP every 5s for the next 30s.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Tandoori_Roast_Chicken.png/revision/latest/scale-to-width-down/45?cb=20220825090922',
    name: 'Tandoori Roast Chicken',
    recipe: [
      {
        ingredient: 'Fowl',
        quantity: '3',
      },
      {
        ingredient: 'Rukkhashava Mushrooms',
        quantity: '2',
      },
      {
        ingredient: 'Padisarah',
        quantity: '1',
      },
      {
        ingredient: 'Spice',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' ATK by 224~320 and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/25/Item_Tea_Break_Pancake.png/revision/latest/scale-to-width-down/45?cb=20210417154511',
    name: 'Tea Break Pancake',
    recipe: [
      {
        ingredient: 'Berry',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Teyvat_Fried_Egg.png/revision/latest/scale-to-width-down/45?cb=20210416223215',
    name: 'Teyvat Fried Egg',
    recipe: [
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
    ],
    stars: '1 Star',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 50~150 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tianshu_Meat.png/revision/latest/scale-to-width-down/45?cb=20210415145930',
    name: 'Tianshu Meat',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Sugar',
        quantity: '2',
      },
      {
        ingredient: 'Qingxin',
        quantity: '1',
      },
      {
        ingredient: 'Matsutake',
        quantity: '1',
      },
    ],
    stars: '4 Stars',
    effect_title: 'CRIT Rate Up',
    type: 'ATK-Boosting Dishes',
    description:
      "Increases all party members' Physical DMG by 25~45% and CRIT Rate by 6~10% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Tonkotsu_Ramen.png/revision/latest/scale-to-width-down/45?cb=20210723021836',
    name: 'Tonkotsu Ramen',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Bamboo Shoot',
        quantity: '2',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tri-Flavored_Skewer.png/revision/latest/scale-to-width-down/45?cb=20210723021644',
    name: 'Tri-Flavored Skewer',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '4',
      },
      {
        ingredient: 'Bird Egg',
        quantity: '2',
      },
      {
        ingredient: 'Flour',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 160~228 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Tricolor_Dango.png/revision/latest/scale-to-width-down/45?cb=20210723020841',
    name: 'Tricolor Dango',
    recipe: [
      {
        ingredient: 'Milk',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
      {
        ingredient: 'Sakura Bloom',
        quantity: '2',
      },
      {
        ingredient: 'Rice',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/45?cb=20210415145658',
    name: 'Triple-Layered Consomm\u00c3\u00a9',
    recipe: [
      {
        ingredient: 'Ham',
        quantity: '2',
      },
      {
        ingredient: 'Fowl',
        quantity: '2',
      },
      {
        ingredient: 'Bamboo Shoot',
        quantity: '1',
      },
      {
        ingredient: 'Mushroom',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Shield strength by 20~30% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Tuna_Sushi.png/revision/latest/scale-to-width-down/45?cb=20210723023501',
    name: 'Tuna Sushi',
    recipe: [
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Rice',
        quantity: '3',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 20~24% of Max HP and an additional 900~1,500 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Item_Udon_Noodles.png/revision/latest/scale-to-width-down/45?cb=20220222033815',
    name: 'Udon Noodles',
    recipe: [
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Seagrass',
        quantity: '1',
      },
      {
        ingredient: 'Fish',
        quantity: '1',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Unagi_Chazuke.png/revision/latest/scale-to-width-down/45?cb=20211124035945',
    name: 'Unagi Chazuke',
    recipe: [
      {
        ingredient: 'Eel Meat',
        quantity: '4',
      },
      {
        ingredient: 'Rice',
        quantity: '3',
      },
      {
        ingredient: 'Seagrass',
        quantity: '3',
      },
      {
        ingredient: 'Salt',
        quantity: '1',
      },
    ],
    stars: '3 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description:
      "Increases all party members' Healing Bonus by 15%~20% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Universal_Peace.png/revision/latest/scale-to-width-down/45?cb=20210417152316',
    name: 'Universal Peace',
    recipe: [
      {
        ingredient: 'Rice',
        quantity: '4',
      },
      {
        ingredient: 'Lotus Head',
        quantity: '2',
      },
      {
        ingredient: 'Carrot',
        quantity: '2',
      },
      {
        ingredient: 'Berry',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Healing',
    type: 'Recovery Dishes',
    description:
      'Restores 30~34% of Max HP and an additional 600~1,900 HP to the selected character.',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/36/Item_Unmoving_Essential_Oil.png/revision/latest/scale-to-width-down/45?cb=20210109221053',
    name: 'Unmoving Essential Oil',
    recipe: [
      {
        ingredient: 'Frog (Material)',
        quantity: '1',
      },
      {
        ingredient: 'Cor Lapis',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Geo DMG Up',
    type: 'Essential Oils',
    description: "Increases all party members' Geo DMG by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Item_Vegetarian_Abalone.png/revision/latest/scale-to-width-down/45?cb=20210216221639',
    name: 'Vegetarian Abalone',
    recipe: [
      {
        ingredient: 'Matsutake',
        quantity: '2',
      },
      {
        ingredient: 'Snapdragon',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'Revive',
    type: 'Recovery Dishes',
    description: 'Revives a character and restores 250~550 HP',
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Wakatakeni.png/revision/latest/scale-to-width-down/45?cb=20211014000644',
    name: 'Wakatakeni',
    recipe: [
      {
        ingredient: 'Bamboo Shoot',
        quantity: '3',
      },
      {
        ingredient: 'Seagrass',
        quantity: '2',
      },
    ],
    stars: '2 Stars',
    effect_title: 'DEF Up',
    type: 'DEF-Boosting Dishes',
    description: "Increases all party members' DEF by 88~126 for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Windbarrier_Potion.png/revision/latest/scale-to-width-down/45?cb=20210109223450',
    name: 'Windbarrier Potion',
    recipe: [
      {
        ingredient: 'Crystal Core',
        quantity: '1',
      },
      {
        ingredient: 'Dandelion Seed',
        quantity: '1',
      },
      {
        ingredient: 'Mora',
        quantity: '100',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Anemo RES Up',
    type: 'Potions',
    description: "Increases all party members' Anemo RES by 25% for 300s.",
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Wolfhook_Juice.png/revision/latest/scale-to-width-down/45?cb=20201126235131',
    name: 'Wolfhook Juice',
    stars: '2 Stars',
    effect_title: 'ATK Up',
    type: 'ATK-Boosting Dishes',
    description: "Increases all party members' ATK by 114 for 300s.",
    recipe: [],
  },
  {
    src: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Item_Zhongyuan_Chop_Suey.png/revision/latest/scale-to-width-down/45?cb=20210416223953',
    name: 'Zhongyuan Chop Suey',
    recipe: [
      {
        ingredient: 'Raw Meat',
        quantity: '3',
      },
      {
        ingredient: 'Fish',
        quantity: '3',
      },
      {
        ingredient: 'Flour',
        quantity: '3',
      },
      {
        ingredient: 'Salt',
        quantity: '2',
      },
    ],
    stars: '3 Stars',
    effect_title: 'Stamina Reduction',
    type: "Adventurer's Dishes",
    description:
      "Decreases all party members' climbing and sprinting Stamina consumption by 15~25% for 900s.",
  },
];
