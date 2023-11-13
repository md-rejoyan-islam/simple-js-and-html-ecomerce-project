const shopping_items = document.getElementById("shopping_items");
shopping_items.addEventListener("DomContentLoaded", shoppingLoad());

// shopping items
function shoppingLoad() {
  let itemsShow = "";
  const items = JSON.parse(localStorage.getItem("buy"));

  if (items) {
    items.forEach((item, index) => {
      itemsShow += `
         <tr >
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
  }
  shopping_items.innerHTML = itemsShow;
}

const modal = document.getElementById("modal");

// remove item
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
