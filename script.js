const receiptmodal = document.getElementById("receipt-modal");
const sourcesmodal = document.getElementById("sources-modal");
const categorytitle = document.getElementById("category-title");
const leftarrow = document.getElementById("leftarrow-svg")
const rightarrow = document.getElementById("rightarrow-svg")
const yeartext = document.getElementById("year")
const yearreceipt = document.getElementById("receipt-year")
const article = document.getElementById("category-article")
let year = ""
let image = ""

function getYear() {
  year = yeartext.innerText;
}

function increaseYear() {
  getYear();
  if (year === "2024") {
    yeartext.innerText = "2025";
    rightarrow.style.fill = "none";
    rightarrow.style.cursor = "default";
    rightarrow.style.zIndex = "1";
  }
  else if (year === "2022") {
    yeartext.innerText = "2024";
  }
  else if (year === "2020") {
    yeartext.innerText = "2022"
    leftarrow.style.fill = "#AA0B0B";
    leftarrow.style.cursor = "pointer";
    leftarrow.style.zIndex = "auto";

  };
  year = yeartext.innerText;
  yearreceipt.innerText = year;

}

function decreaseYear() {
  getYear();
  if (year === "2022") {
    yeartext.innerText = "2020";
    leftarrow.style.fill = "none";
    leftarrow.style.cursor = "default";
    leftarrow.style.zIndex = "1";
  }
  else if (year === "2024") {
    yeartext.innerText = "2022";
  }
  else if (year === "2025") {
    yeartext.innerText = "2024"
    rightarrow.style.fill = "#AA0B0B";
    rightarrow.style.cursor = "pointer";
    rightarrow.style.zIndex = "auto";

  };

  year = yeartext.innerText;
  yearreceipt.innerText = year;
}

/*I had :hover css on these, which stopped working with the code above. 
Then I put these functions on, but I needed to put more exceptions in so 
they didn't trigger the arrows to show up when they're not supposed to.*/

function arrowHover(arrowname) {
  if (year === "2020" && arrowname === "leftarrow-svg") {
  }
  else if (year === "2025" && arrowname === "rightarrow-svg") {

  }
  else {
    arrowname = document.getElementById(arrowname);
    arrowname.style.fill = "orangered";
  }
}

function arrowNoHover(arrowname) {
  if (year === "2020" && arrowname === "leftarrow-svg") {
  }
  else if (year === "2025" && arrowname === "rightarrow-svg") {

  }
  else {
    arrowname = document.getElementById(arrowname)
    arrowname.style.fill = "#AA0B0B";
  }
}

//still writing some of these sections -- I've populated Transportation, Housing, and Groceries articles.
//I'm already way over the word count I was hoping for, so I'll need to rework this anyway. 
//I'll just submit as-is, even though it's incomplete. Sorry!
function displayReceipt(Category) {
  categorytitle.innerText = Category;
  if (Category === "ENERGY") {
    if (year === "2020") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2022") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2024") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2025") {
      article.innerText = "Under construction -- coming soon!"
    }

  }
  else if (Category === "HEALTHCARE") {
    if (year === "2020") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2022") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2024") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2025") {
      article.innerText = "Under construction -- coming soon!"
    }
  }
  else if (Category === "EDUCATION") {
    if (year === "2020") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2022") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2024") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2025") {
      article.innerText = "Under construction -- coming soon!"
    }

  }
  else if (Category === "GROCERIES") {
    if (year === "2020") {
      article.innerText = "Grocery prices didn’t increase as significantly in 2020 as they did in future pandemic years, but North Carolinians still faced significant challenges with food access and security due to pandemic economic conditions. The emergency pandemic response from the state government included an increase in food benefits to Food and Nutrition Services recipients. Grocery chains also saw increased profits as people turned to home cooking while restaurants were closed."
    }
    else if (year === "2022") {
      article.innerText = "Pandemic inflation peaked in 2022, and food prices – considered more volatile than other measures of inflation – climbed along with other goods and services. Food prices were especially affected by Russia’s invasion of Ukraine, which tightened global supplies of grain. News sources reported on loaves of bread for over $10, and other staples like milk and eggs were pricy enough that shoppers bought less."
    }
    else if (year === "2024") {
      article.innerText = "Inflation slowed in 2024, and grocery prices in particular slowed their rise. Nevertheless, prices at the grocery store remained high in North Carolina. Though much of the increased price tag on groceries could be attributed to general inflation in the pandemic years, companies may also have engaged in price gouging – a practice that Kamala Harris targeted in her campaign."
    }
    else if (year === "2025") {
      article.innerText = "At the beginning of the year, the price of eggs continued to climb due to shortages caused by avian flu. January and February both saw egg price increases at percents higher than 12%, though the rate of increased slowed in March. While other grocery prices haven’t risen as steeply this year, the new tariffs are expected to increase prices of imported foods and beverages, and perhaps even make some unavailable."
    }

  }
  else if (Category === "HOUSING") {
    if (year === "2020") {
      article.innerText = "Many North Carolina renters faced eviction risks when they were suddenly out of work due to the Pandemic, and the state and federal governments stepped in with eviction moratoriums and emergency rental assistance. Home prices had been steadily rising before the pandemic, correlating with a decline in active home listings, but had risen at the same rate as national home prices. Beginning in 2020, North Carolina’s housing prices began a 5-year rise that also closed the gap with national housing prices. "
    }
    else if (year === "2022") {
      article.innerText = "Housing costs continued to rise in 2022 in North Carolina. 2021 had seen a record high year-over-year increase of 18% in the median cost of a single-family home in the state, from $269,446 to $317,554, and though 2022’s housing costs only rose by another 9% year-over-year to $347,212, people in the state still felt the pinch. In 2022, 1.2 million households in North Carolina were cost-burdened – spending more than 30% of their income on housing – representing 28.3% of households in the state. The Federal Reserve also raised interest rates multiple times throughout 2022 in an effort to curb inflation, leading to an additional decrease in affordability for prospective homebuyers."
    }
    else if (year === "2024") {
      article.innerText = "The percentage of cost-burdened households in North Carolina remained steady at 28% in 2024, with 48% of renters being cost-burdened. A family with two working parents and one child could be expected to pay $16,815 per year for housing. While the “real home price” (home prices adjusted for inflation) remained fairly steady, interest rates only came down slightly, and housing affordability (a measure that incorporates price, cost of money, and income) hit a new low."
    }
    else if (year === "2025") {
      article.innerText = "Housing affordability remains a concern in North Carolina in 2025 – and home prices are only expected to increase further due to tariffs. The construction industry relies on many imported raw materials from Canada, Mexico, and China, and tariffs on these materials could cost the industry $4 billion nationally and raise new-home prices by 5%."
    }

  }
  else if (Category === "TRANSPORTATION") {
    if (year === "2020") {
      article.innerText = "With transportation crawling to a halt as people stayed home during the pandemic, gas prices fell dramatically in the spring of 2020. In April of 2020, North Carolinians could expect to pay an average of $1.76 for a gallon of gas. Though prices rose somewhat again by the end of the year, transportation was a sector where people were spending much less than normal. Supply chains for cars were impacted by the pandemic, but prices for cars didn’t begin rising significantly until 2021, when demand picked back up and clashed with a limited supply."
    }
    else if (year === "2022") {
      article.innerText = "As the pandemic affected international supply chains, the price of cars increased significantly. Buying a used car in January of 2022 in North Carolina cost around 43% more than in January of 2021, even higher than the national average increase of 40%. Gas prices also soared back up after dipping in 2020, peaking at $4.67/gallon in the state in June of 2022. Tracking gas prices, air fares also spiked in 2022."
    }
    else if (year === "2024") {
      article.innerText = "By 2024, car prices had come back to a more typical level in North Carolina and across the country. Gas prices, too, only fluctuated normally over the course of the year, with a slight increase toward the middle of the year and a decrease in the fall and winter."
    }
    else if (year === "2025") {
      article.innerText = "Tariffs are expected to affect the car market similarly to the pandemic, with significantly increased prices for both cars and car parts. Unlike more northern states that import a larger portion of their gas from Canada, North Carolina likely won’t see a large impact on gas prices."
    }

  }
  else if (Category === "CHILDCARE") {
    if (year === "2020") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2022") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2024") {
      article.innerText = "Under construction -- coming soon!"
    }
    else if (year === "2025") {
      article.innerText = "Under construction -- coming soon!"
    }

  }
  receiptmodal.style.display = "flex";

}

function closeModal() {
  receiptmodal.style.display = "none";
  sourcesmodal.style.display = "none";

}

function displaySources() {
  sourcesmodal.style.display = "flex";
}

function mouseOverThingy(thingy) {
  let image = document.getElementById(thingy);
  image.style.width = "105%";
  image.style.filter = "contrast(175%) brightness(175%)";
}

function mouseAwayThingy(thingy) {
  let image = document.getElementById(thingy);
  image.style.width = "100%";
  image.style.filter = "contrast(100%) brightness(100%)";
  image.style.filter = "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))";
}

window.onclick = function (event) {
  if (event.target == receiptmodal) {
    receiptmodal.style.display = "none";

  };
  if (event.target == sourcesmodal) {
    sourcesmodal.style.display = "none";
  }
}
