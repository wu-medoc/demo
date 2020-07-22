export interface interfaceData {
    id: number;
    linkTitle: string;
    routerLink: string;
}

export const interfaceData = [
  { id: 1,linkTitle: 'Home' ,routerLink: '/home' },
  { id: 2,linkTitle: 'Swiper',routerLink: '/swiperDemo' },
  { id: 3,linkTitle: 'FormUI',routerLink: '/formUI' },
  { id: 4,linkTitle: 'AnimLayer',routerLink: '/animLayer' },
  { id: 5,linkTitle: 'Icon',routerLink: '/icon' },
  { id: 6,linkTitle: 'Templeate',routerLink: '/templeate' },
  { id: 7,linkTitle: 'HeroExp',routerLink: '/heroExp' },
];

export class Hero {
  static nextId = 0;

  static heroes: Hero[] = [
    new Hero(
      null,
      'Hercules',
      'happy',
      new Date(1970, 1, 25),
      'http://www.imdb.com/title/tt0065832/',
      325
    ),
    new Hero(1, 'Dr Nice',  'happy'),
    new Hero(2, 'Narco',     'sad' ),
    new Hero(3, 'Windstorm', 'confused' ),
    new Hero(4, 'Magneta')
  ];

  constructor(
    public id?: number,
    public name?: string,
    public emotion?: string,
    public birthdate?: Date,
    public url?: string,
    public rate = 100,
    ) {
    this.id = id ? id : Hero.nextId++;
  }

  clone(): Hero {
    return Object.assign(new Hero(), this);
  }
}
