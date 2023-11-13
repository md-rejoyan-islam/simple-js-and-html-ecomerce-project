// computer items + load computer items
const computer_items = document.getElementById("computer_items");
computer_items.addEventListener("DomContentLoaded", computerLoad());

// mobile items + load mobile items
const mobile_items = document.getElementById("mobile_items");
mobile_items.addEventListener("DomContentLoaded", mobileLoad());

// Accessories items + load Accessories items
const accessories_items = document.getElementById("accessories_items");
accessories_items.addEventListener("DomContentLoaded", accessoriesLoad());

// computer items
async function computerLoad() {
  let itemsShow = "";
  try {
    const items = await fetch("/assets/data/computers.json");
    const response = await items.json();

    if (response) {
      response.forEach((item) => {
        itemsShow += ` 
            <div
              class=" hover:scale-105 hover:border-sky-100 hover:border-4 flex-1 min-w-[280px] max-w-[350px] mx-auto item bg-white border border-zinc-200 px-4 sm:pt-3 p-4 rounded-md flex flex-col-reverse sm:flex gap-3 items-center text-center text-xl"
            >
              <div class="pb-3">
                <h2 class="pb-3" id="name">${item.title}</h2>
                <hr />
                <div class="mb-4">
                  <p class="text-red-500 text-xl text-center font-semibold">
                  <span id="price">${item.price}</span> <span class="text-3xl font-bold">৳</span>
                  </p>
                </div>
                <div class="flex gap-4 items-center">
                  <input
                    type="number"
                    class="py-2 px-4 border border-zinc-200 focus:outline-none w-full"
                    value="1"
                    id="myInput"
                  />
                  <button
                    id="myBtn"
                    class="text-white hover:bg-violet-600 bg-violet-500 px-3 py-2 rounded-md w-full"
                    >Buy Now</
                  >
                </div>
              </div>
              <figure>
                <img
                  src="./assets//images//computer/${item.photo}"
                  alt=""
                  class="w-[350px]"
                />
              </figure>
            </div>`;
      });
    }
    computer_items.innerHTML = itemsShow;
  } catch (error) {}
}

// mobile items
async function mobileLoad() {
  let itemsShow = "";
  try {
    const items = await fetch("/assets/data/phones.json");
    const response = await items.json();

    if (response) {
      response.forEach((item) => {
        itemsShow += ` 
            <div
              class=" hover:scale-105 hover:border-sky-100 hover:border-4 flex-1 min-w-[280px] max-w-[350px] mx-auto item bg-white border border-zinc-200 px-4 sm:pt-3 p-4 rounded-md flex flex-col-reverse sm:flex gap-3 items-center text-center text-xl"
            >
              <div class="pb-3">
                 <h2 class="pb-3" id="name">${item.title}</h2>
                <hr />
                <div class="mb-4">
                  <p class="text-red-500 text-xl text-center font-semibold">
                   <span id="price">${item.price}</span> <span class="text-3xl font-bold">৳</span>
                  </p>
                </div>
                <div class="flex gap-4 items-center">
                  <input
                    type="number"
                    class="py-2 px-4 border border-zinc-200 focus:outline-none w-full"
                    value="1"
                      id="myInput"
                  />
                  <button
                        id="myBtn"
                    class="text-white hover:bg-violet-600 bg-violet-500 px-3 py-2 rounded-md w-full"
                    >Buy Now</
                  >
                </div>
              </div>
              <figure>
                <img
                  src="./assets/images/phone/${item.photo}"
                  alt=""
                  class="w-[350px]"
                />
              </figure>
            </div>`;
      });
    }
    mobile_items.innerHTML = itemsShow;
  } catch (error) {}
}

// mobile items
async function accessoriesLoad() {
  let itemsShow = "";
  try {
    const items = await fetch("/assets/data/phones.json");
    const response = await items.json();

    if (response) {
      response.forEach((item) => {
        itemsShow += ` 
            <div
              class=" hover:scale-105 hover:border-sky-100 hover:border-4 flex-1 min-w-[280px] max-w-[350px] mx-auto item bg-white border border-zinc-200 px-4 sm:pt-3 p-4 rounded-md flex flex-col-reverse sm:flex gap-3 items-center text-center text-xl"
            >
              <div class="pb-3">
                <h2 class="pb-3" id="name">${item.title}</h2>
                <hr />
                <div class="mb-4">
                  <p class="text-red-500 text-xl text-center font-semibold">
                <span id="price">${item.price}</span> <span class="text-3xl font-bold">৳</span>
                  </p>
                </div>
                <div class="flex gap-4 items-center">
                  <input
                    type="number"
                    class="py-2 px-4 border border-zinc-200 focus:outline-none w-full"
                    value="1"
                      id="myInput"
                  />
                  <button
                 id="myBtn"
                    class="text-white hover:bg-violet-600 bg-violet-500 px-3 py-2 rounded-md w-full"
                    >Buy Now</
                  >
                </div>
              </div>
              <figure>
                <img
                  src="./assets/images/accessories/${item.photo}"
                  alt=""
                  class="w-[350px]"
                />
              </figure>
            </div>`;
      });
    }
    accessories_items.innerHTML = itemsShow;
  } catch (error) {}
}

const cardItems = JSON.parse(localStorage.getItem("buy")) || [];

const modal = document.getElementById("modal");

const all_items = document.getElementById("all_items");
// computer item click event
all_items.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.id === "myBtn") {
    // modal show
    modal.classList.remove("hidden");

    // others
    const parent = e.target.parentElement.parentElement.parentElement;
    const inputValue = e.target.previousElementSibling.value;
    const price = parent.querySelector("#price").innerText;
    const name = parent.querySelector("#name").innerText;
    const productDetails = {
      name: name,
      price: price,
      quantity: inputValue,
    };
    cardItems.push(productDetails);
    // save to local storage
    localStorage.setItem("buy", JSON.stringify(cardItems));

    // modal off
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 2000);
  }
});
