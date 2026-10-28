// ✏️ This is the only file you need to edit.
// Put your photos in the /photos folder and list them below.
const CONFIG = {
  name: "Shivam Sourav Jha",
  tagline: "Food & lifestyle content creator · Brand collaborations",
  about:
    "I create food, drink and lifestyle content that makes people want to taste what's on screen. " +
    "From coffee roasters to chili oils to restaurant launches, I've partnered with brands across " +
    "India to tell their story to an audience that actually cares about what they eat and drink.",
  email: "you@example.com", // TODO: your collab email
  instagram: "shivamsouravjha", // without the @

  // Brands you've worked with, grouped by category
  brands: {
    "Food & Condiments": [
      "Ketch Up by YU Foodlabs",
      "Surabhi Foods",
      "Winn Foods",
      "Awe Foods",
      "Nearwala",
      "My PB",
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
    "Health & Wellness": ["Liveology", "Polka Wellness", "Protyze"],
    Restaurants: ["Yuki", "Amicii"],
  },

  // src: path to the image (e.g. "photos/blue-tokai.jpg")
  // tag: category for the filter buttons (food, drinks, wellness, restaurants)
  // caption: shown in the full-screen view — good place to name the brand
  photos: [
    { src: "https://picsum.photos/id/292/1200/800", tag: "food", caption: "Winn Foods — chili oil" },
    { src: "https://picsum.photos/id/425/800/1100", tag: "drinks", caption: "Blue Tokai" },
    { src: "https://picsum.photos/id/1080/1200/900", tag: "food", caption: "Ketch Up by YU Foodlabs" },
    { src: "https://picsum.photos/id/766/800/1100", tag: "drinks", caption: "Toffee Coffee Roasters" },
    { src: "https://picsum.photos/id/493/1200/800", tag: "wellness", caption: "Polka Wellness" },
    { src: "https://picsum.photos/id/835/800/1000", tag: "restaurants", caption: "Yuki" },
    { src: "https://picsum.photos/id/312/1200/800", tag: "restaurants", caption: "Amicii" },
    { src: "https://picsum.photos/id/431/800/1100", tag: "drinks", caption: "Shotgun Beer" },
    { src: "https://picsum.photos/id/488/1200/900", tag: "food", caption: "Surabhi Foods" },
  ],
};
