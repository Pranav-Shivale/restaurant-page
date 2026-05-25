const contentDiv = document.querySelector("#content");

const loadHeadline = () => {
  const storeName = document.createElement("h1");
  const storeHeadline = document.createElement("p");
  storeName.textContent = "Furukawa Bread";
  storeHeadline.innerHTML = `Furukawa Bread (古河パン) is a bakery owned and operated by the Furukawa family. 
                             The bakery is well known for Sanae's <em>strange</em> concepts for making bread.
                             However, it is an unspoken rule that no one can make a negative comment on 
                             anything made by her, so most of the time neighbors end up buying bread made by Akio.`
  contentDiv.appendChild(storeName);
  contentDiv.appendChild(storeHeadline);
}

const loadTiming = () => {
  const timeHeading = document.createElement("h3");
  const timingList = document.createElement("ul");
  const weekdayTime = document.createElement("li");
  const weekendTime = document.createElement("li");
  timeHeading.textContent = "Store timings";
  weekdayTime.textContent = "Monday to Friday - 7am to 8pm";
  weekendTime.textContent = "Saturday and Sunday - 9am to 7pm";
  timingList.appendChild(weekdayTime);
  timingList.appendChild(weekendTime);
  contentDiv.appendChild(timeHeading);
  contentDiv.appendChild(timingList);
}

const loadLocation = () => {
  const locationHeading = document.createElement("h3");
  const address = document.createElement("p");
  locationHeading.textContent = "Location";
  address.textContent = "Near Sayama Park, Mizuho, Tokyo";
  contentDiv.appendChild(locationHeading);
  contentDiv.appendChild(address);
}

export default () => {
  contentDiv.replaceChildren();
  loadHeadline();
  loadTiming();
  loadLocation();
}