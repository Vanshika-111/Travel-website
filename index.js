const foodData = {
  jaipur: {
    dishes: ["Daal Baati Churma", "Laal Maas", "Ghewar"],
    places: ["Laxmi Misthan Bhandar", "Rawat Kachori", "Handi Restaurant"]
  },
  paris: {
    dishes: ["Croissant", "Escargot", "Ratatouille"],
    places: ["Le Meurice", "Bistro Paul Bert", "Café de Flore"]
  },
  tokyo: {
    dishes: ["Sushi", "Ramen", "Tempura"],
    places: ["Sukiyabashi Jiro", "Ichiran", "Ginza Kyubey"]
  },
  kerala: {
    dishes: ["Appam with Stew", "Puttu and Kadala Curry", "Kerala Sadya"],
    places: ["Dhe Puttu", "Paragon Restaurant", "Hotel Rahmath"]
  },
  rome: {
    dishes: ["Carbonara", "Saltimbocca", "Supplì"],
    places: ["Roscioli", "Da Enzo al 29", "Trattoria Monti"]
  },
  monaco: {
    dishes: ["Barbajuan", "Socca", "Stocafi"],
    places: ["Le Louis XV", "Café de Paris", "Maya Bay"]
  },
  
  corsica: {
    dishes: ["Wild Boar Stew", "Brocciu Cheese Dishes", "Chestnut Cake"],
    places: ["U Fanale", "A Casarella", "Le Pirate"]
  },
  newyork: {
    dishes: ["Bagel with Lox", "New York-Style Pizza", "Pastrami on Rye"],
    places: ["Katz's Delicatessen", "Joe's Pizza", "Russ & Daughters"]
  },
  sydney: {
    dishes: ["Meat Pie", "Barramundi", "Lamington"],
    places: ["The Grounds of Alexandria", "Quay", "Bourke Street Bakery"]
  },
 
  newzealand: {
    dishes: ["Hāngi", "Pavlova", "Green-lipped Mussels"],
    places: ["Depot Eatery", "Fergburger", "The Grove"]
  }
};

document.getElementById("citySelect").addEventListener("change", function () {
  const city = this.value;
  const box = document.getElementById("recommendations");

  if (city && foodData[city]) {
    const data = foodData[city];
    box.innerHTML = `
      <h2>Top Local Dishes:</h2>
      <ul>${data.dishes.map(dish => `<li>${dish}</li>`).join("")}</ul>
      <h2>Where to Eat:</h2>
      <ul>${data.places.map(place => `<li>${place}</li>`).join("")}</ul>
    `;
  } else {
    box.innerHTML = "";
  }
});
