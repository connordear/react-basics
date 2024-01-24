export interface Activity {
  title: string;
  description: string;
  link: string;
  price: number;
  priceDetails: string;
  image: string;
}

export function getActivities(): Activity[] {
  return [
    {
      title: "Nordic Spa",
      description: "Enjoy a relaxing day at the spa",
      link: "https://www.scandinave.com/en/",
      price: 100,
      priceDetails: "per person",
      image: "spa.jpg",
    },
    {
      title: "Snowshoeing",
      description: "Explore the beautiful trails around the resort",
      link: "https://www.scandinave.com/en/",
      price: 30,
      priceDetails: "per person",
      image: "snowshoe.jpg",
    },
    {
      title: "Dog Sledding",
      description: "Meet the huskies and go on an adventure",
      link: "https://www.scandinave.com/en/",
      price: 150,
      priceDetails: "per person",
      image: "dogsledding.jpg",
    },
    {
      title: "Snowmobiling",
      description: "Feel the thrill of riding a snowmobile",
      link: "https://www.scandinave.com/en/",
      price: 120,
      priceDetails: "per person",
      image: "snowmobile.jpg",
    },
    {
      title: "Ice Fishing",
      description: "Experience the quiet of ice fishing",
      link: "https://www.scandinave.com/en/",
      price: 80,
      priceDetails: "per person",
      image: "icefishing.jpg",
    },
    {
      title: "Skiing",
      description: "Hit the slopes on the mountain",
      link: "https://www.scandinave.com/en/",
      price: 50,
      priceDetails: "per person",
      image: "skiing.jpg",
    },
  ];
}

export async function getActivitiesAsync(): Promise<Activity[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getActivities());
    }, 1000);
  });
}
