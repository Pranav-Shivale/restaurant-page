import bananaBread from "./images/bread/banana-bread.png";
import jellyBread from "./images/bread/jelly-bread.png";
import squidBread from "./images/bread/squid-bread.png";
import crabBread from "./images/bread/crab-bread.png";

const contentDiv = document.querySelector("#content");

const loadItem = (menuRow, imgSrc, itemPriceContent) => {
  const menuItem = document.createElement("div");

  const itemImg = document.createElement("img");
  itemImg.classList.add("bread-img");
  itemImg.src = imgSrc;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("bread-price");
  itemPrice.textContent = itemPriceContent;

  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemPrice);

  menuRow.appendChild(menuItem);
}

export default () => {
  contentDiv.replaceChildren();
  
  const menuRowOne = document.createElement("div");
  menuRowOne.classList.add("menu-row");

  loadItem(menuRowOne, bananaBread, "Banana Bread - 150 Yen");
  loadItem(menuRowOne, jellyBread, "Jelly Bread - 110 Yen");
  contentDiv.appendChild(menuRowOne);

  const menuRowTwo = document.createElement("div");
  menuRowTwo.classList.add("menu-row");

  loadItem(menuRowTwo, squidBread, "Squid Bread - 140 Yen");
  loadItem(menuRowTwo, crabBread, "Crab Bread - 200 Yen");

  contentDiv.appendChild(menuRowTwo);
}

