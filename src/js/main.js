export function show(type = "") {
  const itemList = document.querySelectorAll(".miniProject-div");

  if (type === "all") {
    itemList.forEach((item) => item.classList.add("active"));
  }
  itemList.forEach((item, i) => {
    if (i >= 2) {
      return;
    } else {
      item.classList.add("active");
    }
  });
}
export function reveal() {
  console.log("dziala reveal");
  const itemList = document.querySelectorAll(".miniProject-div");
  itemList.forEach((item) => {
    let windowheight = window.innerHeight;
    let revealtop = item.getBoundingClientRect().top;
    let revealpoint = 20;

    if (revealtop < windowheight - revealpoint) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
