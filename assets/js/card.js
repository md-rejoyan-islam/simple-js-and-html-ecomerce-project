// modal
const modal = document.getElementById("modal");

// loaded buying product list
const shopping_items = document.getElementById("shopping_items");
shopping_items.addEventListener("DomContentLoaded", shoppingLoad());

// shopping items
function shoppingLoad() {
  let itemsShow = "";
  const items = JSON.parse(localStorage.getItem("buy")) || [];

  let sum = 0;
  if (items.length > 0) {
    items.forEach((item, index) => {
      sum += Number(item.quantity) * Number(item.price);
      itemsShow += `
         <tr class="hover:bg-zinc-100 cursor-pointer" >
                    <td>
                      <figure>
                        <img src="./assets/images/computer/item1.webp"
                        class="w-[70px] mx-auto alt="" />
                      </figure>
                    </td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${Number(item.quantity) * Number(item.price)}</td>
                    <td>
                      <button
                        class="text-sm bg-red-400 rounded-sm hover:bg-red-600 py-2 px-3 text-white"
                        id="remove"
                         data-index="${index}"
                      >
                        remove
                      </button>
                    </td>
                  </tr>`;
    });
  } else {
    itemsShow += `<tr > <td colspan="6" class="text-center py-4 text-red-600">No Item Added</td> </tr>`;
  }
  shopping_items.innerHTML = itemsShow;

  // footer added
  const footer = document.getElementById("table-footer");
  footer.innerHTML = ` <tr>
                    <td
                      colspan="4"
                      class="py-2 text-[18px] text-center font-semibold"
                    >
                      Total Cost
                    </td>
                    <td class="text-center" id="total_price">${sum}</td>
                    <td></td>
                  </tr>`;
}

// remove item form shopping list
shopping_items.addEventListener("click", (e) => {
  if (e.target.id === "remove") {
    // modal show
    modal.classList.remove("hidden");
    const index = e.target.dataset.index;
    const items = JSON.parse(localStorage.getItem("buy"));
    items.splice(index, 1);
    localStorage.setItem("buy", JSON.stringify(items));
    shoppingLoad();

    // modal off
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 2000);
  }
});
