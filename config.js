// ✏️ This is the only file you need to edit.
// Put your photos in the /photos folder and list them below.
const CONFIG = {
  name: "Shivam Sourav Jha",
  tagline: "Food & lifestyle content creator · 6.7M views on a single reel",
  hero: "photos/blue-tokai.jpg", // background image at the top of the page
  about:
    "I create food, drink and lifestyle content that makes people want to taste what's on screen. " +
    "From coffee roasters to chili oils to restaurant launches, I've partnered with brands across " +
    "India to tell their story to an audience that actually cares about what they eat and drink.",
  email: "you@example.com", // TODO: your collab email
  instagram: "shivamsouravjha", // without the @

  // Brands you've worked with, grouped by category
  brands: {
    "Food & Condiments": [
      "YU Foodlabs",
      "Surabhi Foods",
      "Winn Foods",
      "Awe Foods",
      "Nearwala",
    ],
    "Coffee & Drinks": [
      "Blue Tokai",
      "Toffee Coffee Roasters",
      "Tiny Tiger Coffee",
      "Shotgun Beer",
      "Myxer",
      "DRNK Salts",
      "Supply6",
    ],
    "Protein & Nutrition": ["Protyze", "My PB"],
    Wellness: ["Liveology", "Polka Wellness"],
    Restaurants: [
      "11:11",
      "Khao Aur Khane Do",
      "Roti Kulcha Naan",
      "Mumbai Pav Co.",
      "Alienkind",
      "Estate Deli",
      "Kai",
      "Kokoro Ramen",
      "InMinutes",
      "Yuki",
      "Amicii",
    ],
  },

  // src: path to the image (e.g. "photos/blue-tokai.jpg")
  // tag: category for the filter buttons (food, drinks, wellness, restaurants)
  // caption: shown on the card and in the full-screen view — name the brand
  // link: (optional) the Instagram post/reel URL
  // views: (optional) shown as a badge, e.g. "6.7M"
  // Leave src out to show a text tile that links straight to the reel
  photos: [
    {
      src: "photos/supply6-salts.jpg",
      tag: "drinks",
      caption: "Supply6 Salts — hangover cure",
      link: "https://www.instagram.com/reel/DZ-QE7MyiSU/",
      views: "6.7M",
    },
    {
      src: "photos/blue-tokai.jpg",
      tag: "drinks",
      caption: "Blue Tokai",
      link: "https://www.instagram.com/reel/De1hKOyhLAo/",
      views: "113K",
    },
    {
      src: "photos/surabhi-ketchup.jpg",
      tag: "food",
      caption: "Surabhi Foods — Tomato Ketchup",
      link: "https://www.instagram.com/reel/DdRSzb5Mioe/",
      views: "8.6K",
    },
    {
      src: "photos/estate-deli.jpg",
      tag: "restaurants",
      caption: "Estate Deli, Indiranagar",
      link: "https://www.instagram.com/reel/DcA6PpLu6p7/",
      views: "6.5K",
    },
    {
      src: "photos/eleven-eleven.jpg",
      tag: "restaurants",
      caption: "11:11 — grand opening",
      link: "https://www.instagram.com/reel/DeJbgh7h1ty/",
      views: "4.2K",
    },
    {
      src: "photos/toffee-coffee.jpg",
      tag: "drinks",
      caption: "Toffee Coffee Roasters",
      link: "https://www.instagram.com/reel/DaUdcTEhPKg/",
      views: "4.2K",
    },
    {
      src: "photos/winn-pizza-pasta-sauce.jpg",
      tag: "food",
      caption: "Winn Foods — Pizza Pasta Sauce",
      link: "https://www.instagram.com/p/De9OOlcBiBU/",
    },
    {
      src: "photos/khao-aur-khane-do.jpg",
      tag: "restaurants",
      caption: "Khao Aur Khane Do",
      link: "https://www.instagram.com/reel/DdoLWnKMKl7/",
      views: "3.7K",
    },
    {
      src: "photos/roti-kulcha-naan.jpg",
      tag: "restaurants",
      caption: "Roti Kulcha Naan",
      link: "https://www.instagram.com/reel/DeEkK5hpJZg/",
      views: "3.7K",
    },
    {
      src: "photos/mumbai-pav-co.jpg",
      tag: "restaurants",
      caption: "Mumbai Pav Co.",
      link: "https://www.instagram.com/reel/DebuaiaS1QG/",
      views: "3.7K",
    },
    {
      src: "photos/yu-foodlabs.jpg",
      tag: "food",
      caption: "YU Foodlabs — Zero Sugar Sauce",
      link: "https://www.instagram.com/reel/Db-505TBY2Z/",
      views: "3.6K",
    },
    {
      src: "photos/drnk-salts.jpg",
      tag: "drinks",
      caption: "DRNK Salts — electrolytes",
      link: "https://www.instagram.com/reel/DZhUikIOm7Z/",
      views: "3.2K",
    },
    {
      src: "photos/shotgun-beer.jpg",
      tag: "drinks",
      caption: "Shotgun Beer",
      link: "https://www.instagram.com/reel/Dca6tbQM3VG/",
      views: "3.1K",
    },
    {
      src: "photos/nearwala-koko-scoop.jpg",
      tag: "food",
      caption: "Nearwala × Koko Scoop",
      link: "https://www.instagram.com/p/De3mmHUBkLA/",
    },
    {
      src: "photos/alienkind.jpg",
      tag: "restaurants",
      caption: "Alienkind",
      link: "https://www.instagram.com/reel/DeguVQqua_t/",
      views: "2.8K",
    },
    {
      src: "photos/kai.jpg",
      tag: "restaurants",
      caption: "Kai",
      link: "https://www.instagram.com/reel/DdHBzAQSrrM/",
      views: "2.5K",
    },
    {
      src: "photos/awe-foods.jpg",
      tag: "food",
      caption: "Awe Foods — Monsoon Crisps",
      link: "https://www.instagram.com/reel/DdYr9UXBsch/",
      views: "1.8K",
    },
    {
      tag: "restaurants",
      caption: "Kokoro Ramen",
      link: "https://www.instagram.com/reel/Dcax3Q9sGlC/",
    },
    {
      tag: "restaurants",
      caption: "InMinutes Biryani",
      link: "https://www.instagram.com/reel/DcRXWT3OFFk/",
    },
  ],
};
