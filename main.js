const toRadians = (angle) => {
  return (angle / 180) * Math.PI;
};
AFRAME.registerComponent("cursor-listener", {
  init: function () {
    var lastIndex = -1;
    var COLORS = ["red", "green", "blue"];
    this.el.addEventListener("click", function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute("material", "color", COLORS[lastIndex]);
      console.log("I was clicked at: ", evt.detail.intersection.point);
    });
  },
});
const mainBody = document.querySelector("#main-body");
const url = "image.jpg";
// mainBody.innerHTML += `<a-sky src="./${url}"></a-sky>`;
// const countBubble = 100;
// for (var i = 0; i < countBubble; i++) {
//   const radius = 10;
//   const radian = ((Math.PI * i) / countBubble) * 2;
//   const x = radius * Math.sin(radian);
//   const y = -radius * Math.cos(radian);
//   console.log(x + " " + y);
//   mainBody.innerHTML += `<a-sphere position="${x} 1.25 ${y}" radius="1.25" color="#EF2D5E"></a-sphere>`;
// }

mainBody.innerHTML +=
  '<a-plane cursor-listener position="0 2 -4" rotation="-20 0 0" width="4" height="4" color="#7BC8A4"></a-plane>';
