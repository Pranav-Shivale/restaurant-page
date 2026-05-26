const contentDiv = document.querySelector("#content");

export default () => {
  contentDiv.replaceChildren();

  const aboutTitle = document.createElement("h1");
  const aboutPara = document.createElement("p");
  const aboutOwnersTitle = document.createElement("h3");
  const aboutOwnersPara = document.createElement("p");
  const aboutBreadTitle = document.createElement("h3");
  const aboutBreadPara = document.createElement("p");
  const aboutShopTitle = document.createElement("h3");
  const aboutShopPara = document.createElement("p");

  aboutTitle.textContent = "About";
  aboutPara.textContent = `Furukawa Bread is a fictional bakery and family home from the popular anime 
                           and visual novel series Clannad. Run by Akio and Sanae Furukawa, the bakery 
                           is famous for its notoriously inedible—yet lovingly crafted—experimental breads.`
  aboutOwnersTitle.textContent = "The Owners";
  aboutOwnersPara.textContent = `The shop is operated by Akio and Sanae Furukawa, parents of the series' heroine, Nagisa.`
  aboutBreadTitle.textContent = "The Bread";
  aboutBreadPara.textContent = `Sanae is passionate about baking but is a terrible cook, often creating bizarre, 
                                unpalatable concoctions (like bread mixed with rice crackers or starfish) that make 
                                people cry when they eat it. Because of this, Akio actually does most of the real baking.`
  aboutShopTitle.textContent = "The Shop";
  aboutShopPara.textContent = `The bakery is located on the ground floor, while the family lives upstairs. Despite the 
                               questionable quality of the goods, it serves as a warm, welcoming community hub.`

  contentDiv.appendChild(aboutTitle);  
  contentDiv.appendChild(aboutPara);
  contentDiv.appendChild(aboutOwnersTitle);
  contentDiv.appendChild(aboutOwnersPara);
  contentDiv.appendChild(aboutBreadTitle);
  contentDiv.appendChild(aboutBreadPara);
  contentDiv.appendChild(aboutShopTitle);
  contentDiv.appendChild(aboutShopPara);
}