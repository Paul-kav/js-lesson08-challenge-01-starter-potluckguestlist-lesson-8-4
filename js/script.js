// invite button

const addGuestButton = document.querySelector(".invite");
const guestInput = document.querySelector(".add-guest input");
const guestInputLabel = document.querySelector(".add-guest label");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
  }
  clearInput();
});
// clear input box, This prevents the user from having to clear every time they need to type another name
const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

// limiting the guest list
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 5) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
// clearInput();
// const guest = guestInput.value;
// console.log(guest);
// if (guest !== "") {
// let listItem = document.createElement("li");
// listItem.innerText = guest;
// listItem.append(guestList);
// }
// });
// label for the invite button
//
// text input box
