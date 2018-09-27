const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const {
  dialogflow,
  Image,
  List,
  Suggestions,
  Carousel
} = require("actions-on-google");

const app = dialogflow({ debug: true });

app.intent("Default Welcome Intent", conv => {
  conv.ask(
    "Hi there! What would you like to do today? Book a table, see our Menu or know about our specials?"
  );
  conv.ask(
    new Suggestions(["Book a table", "Show me the menu", "House specials"])
  );
});

app.intent("Book a Table", (conv, { guests, date, time }) => {
  console.log("This is the date", date);
  date = new Date(`${date}`).toString().slice(0, 15);
  time = time.toString().slice(11, 16);
  let bookingDate = new Date(date);
  let now = new Date();

  if (guests < 1) {
    conv.ask(
      "I'm sorry we need at least 1 guest to book your table! Try again please!"
    );
  } else if (bookingDate < now) {
    conv.ask("You can't make a reservation in the past, try again please.");
  } else {
    conv.ask(
      `Your table was booked for ${guests} persons on ${date} at ${time}.`
    );
    conv.ask("Would you like to do something else?");
    conv.ask(
      new Suggestions(["Book a table", "Show me the menu", "House specials"])
    );
  }
});

app.intent("Menu", (conv, { menuType }) => {
  conv.ask("Here is our menu:");
  conv.ask(
    new List({
      title: "Menu",
      items: {
        ["Menu 01"]: {
          synonyms: ["menu 01", "item 01"],
          title: "Big Hamburger",
          description:
            "Lorem ipsum dolor amet try-hard YOLO readymade" +
            "poke truffaut plaid.",
          image: new Image({
            url:
              "https://cdn20.patchcdn.com/users/790386/20180525/063909/styles/T800x600/public/processed_images/shutterstock_337714676-1527287683-3245.jpg",
            alt: "Hamburger"
          })
        },

        ["Menu 02"]: {
          synonyms: ["menu 02", "item 02"],
          title: "French Fries",
          description:
            "Lorem ipsum dolor amet try-hard YOLO readymade" +
            "poke truffaut plaid.",
          image: new Image({
            url:
              "http://tasty-yummies.com/wp-content/uploads/2014/03/13390031274_0f663f87cb_o.jpg",
            alt: "French fries"
          })
        },

        ["Menu 03"]: {
          synonyms: ["menu 03", "item 03"],
          title: "Hot-dog",
          description:
            "Lorem ipsum dolor amet try-hard YOLO readymade" +
            "poke truffaut plaid.",
          image: new Image({
            url:
              "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/10/20/0/tu0212_dogs2.jpg.rend.hgtvcom.616.462.suffix/1371584101307.jpeg",
            alt: "Hot-Dog"
          })
        },
        ["Menu 04"]: {
          synonyms: ["menu 04", "item 04"],
          title: "Pizza",
          description:
            "Lorem ipsum dolor amet try-hard YOLO readymade" +
            "poke truffaut plaid.",
          image: new Image({
            url:
              "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            alt: "Pizza"
          })
        }
      }
    })
  );
  conv.ask("Would you like to do something else?");
  conv.ask(
    new Suggestions(["Book a table", "Show me the menu", "House specials"])
  );
});

app.intent("House Specials", conv => {
  conv.ask("Here are our House Specials!");
  conv.ask(
    new Carousel({
      items: {
        // Add the first item to the carousel
        ["House Special One"]: {
          synonyms: ["Special One", "Deal One"],
          title: "First House Special",
          description: "This is a description of a carousel item.",
          image: new Image({
            url:
              "http://www.ingostastyfood.com/wp-content/uploads/2016/06/ingos_burger-6.22.15.jpg",
            alt: "Special one"
          })
        },
        // Add the second item to the carousel
        ["House Special Two"]: {
          synonyms: ["Special Two", "Deal Two"],
          title: "House Special Two",
          description: "The House Special number two.",
          image: new Image({
            url:
              "http://www.sactownmag.com/Whats-Cooking/2017/10-tasty-food-festivals-in-June-and-July/TacoFestival_courtesyofMasaGuiseria5.jpg",
            alt: "Special Two"
          })
        },
        // Add third item to the carousel
        ["House Special Three"]: {
          synonyms: ["Special Three", "Deal Three"],
          title: "Special Three",
          description: "The House Special number three.",
          image: new Image({
            url:
              "https://cdn.vox-cdn.com/thumbor/qtrH6pOAoml-LYysFBb8W8lc680=/0x0:960x776/1200x900/filters:focal(404x312:556x464)/cdn.vox-cdn.com/uploads/chorus_image/image/54422771/Taystee_s.0.0.jpg",
            alt: "Special Three"
          })
        }
      }
    })
  );
  conv.ask("Would you like to do something else?");
  conv.ask(
    new Suggestions(["Book a table", "Show me the menu", "House specials"])
  );
});

app.intent("Options", conv => {
  conv.ask("What would you like to do?");
  conv.ask(
    new Suggestions(["Book a table", "Show me the menu", "House specials"])
  );
});

exports.personalAssistant = functions.https.onRequest(app);
