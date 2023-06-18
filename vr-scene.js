AFRAME.registerComponent("vr-scene", {
  init: function () {
    var sceneEl = this.el;

    // Create the interactive object
    var objectEntity = document.createElement("a-entity");
    objectEntity.setAttribute("position", "0 0 -4");
    var planeEntity = document.createElement("a-plane");
    planeEntity.setAttribute("id", "interactive-object");
    planeEntity.setAttribute("width", "4");
    planeEntity.setAttribute("height", "2");
    planeEntity.setAttribute("color", "#7BC8A4");
    planeEntity.setAttribute("material", "opacity: 0.5");
    planeEntity.addEventListener("mouseenter", function () {
      planeEntity.setAttribute("scale", "1.1 1.1 1.1");
    });
    planeEntity.addEventListener("mouseleave", function () {
      planeEntity.setAttribute("scale", "1 1 1");
    });
    objectEntity.appendChild(planeEntity);

    var textEntity = document.createElement("a-text");
    textEntity.setAttribute(
      "value",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    textEntity.setAttribute("width", "3.6");
    textEntity.setAttribute("color", "#333");
    textEntity.setAttribute("align", "center");
    textEntity.setAttribute("position", "0 0 0.01");
    objectEntity.appendChild(textEntity);
    sceneEl.appendChild(objectEntity);

    // Create the pointer
    var pointerEntity = document.createElement("a-entity");
    pointerEntity.setAttribute("id", "pointer");
    pointerEntity.setAttribute(
      "geometry",
      "primitive: ring; radiusInner: 0.02; radiusOuter: 0.03; thetaLength: 360"
    );
    pointerEntity.setAttribute("material", "color: red; shader: flat");
    pointerEntity.setAttribute("position", "0 0 -1");
    pointerEntity.setAttribute("raycaster", "objects: #interactive-object");
    sceneEl.appendChild(pointerEntity);
  },
});
