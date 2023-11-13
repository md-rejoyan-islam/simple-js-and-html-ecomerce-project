const product_items = document.getElementById("product_items");
// load product items
product_items.addEventListener("DomContentLoaded", productLoad());

// home page product items
async function productLoad() {
  let itemsShow = "";
  try {
    const items = await fetch("/assets/data/items.json");
    const response = await items.json();

    if (response) {
      response.forEach((item) => {
        itemsShow += `<div
            class="flex-1 max-w-[500px] mx-auto item bg-[#f2f1ed] px-4 sm:pt-3 p-4 rounded-md flex flex-col-reverse sm:flex gap-3 items-center text-center text-xl"
          >
            <div class="">
              <h2 class="py-4">${item.name}</h2>
              <a
                href="./shop.html"
                class="text-white hover:bg-violet-600 bg-violet-500 px-3 py-2 rounded-md"
                >shop now</a
              >
            </div>
            <figure>
              <img
                src="./assets/images/items/${item.photo}"
                class="w-[250px]"
                alt=""
              />
            </figure>
          </div>`;
      });
    }
    product_items.innerHTML = itemsShow;
  } catch (error) {}
}

// productLoad();
