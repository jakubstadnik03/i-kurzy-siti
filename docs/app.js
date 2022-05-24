const menu = [
    {
      id: 1,
      date: "9.9.2022 - 11.9.2022",
    },
    {
      id: 2,
      date: "14.10.2022 - 16.10.2022",
    },
    {
      id: 3,
      date: "11.11.2022 – 13.11.2022",
    }
    
  ];


  const sectionCenter = document.querySelector(".date-input");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `
    <option value="date">${item.date}</option>
    `;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

const sectionDate = document.querySelector(".date-list");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayDateItems(menu);
});

function diplayDateItems(dateItems) {
  let displayMenu = dateItems.map(function (item) {
    // console.log(item);

    return `
    <li>${item.date}</li>
    `;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionDate.innerHTML = displayMenu;
}
const sectionItems = document.querySelector(".date-items");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayitemItems(menu);
});

function diplayitemItems(itemItems) {
  let displayMenu = itemItems.map(function (item) {
    // console.log(item);

    return `
    <li>${item.date}</li>
    `;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionItems.innerHTML = displayMenu;
}