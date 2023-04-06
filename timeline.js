var slider = document.getElementById("timelineTime");


const timelineAssets = ["#player"];
var numAssets = 1;
  
  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
      updateTimeline();

      updateCoral();

  }

  // Stops the animation from playing after you release slider
  slider.onchange = function() {
    releaseTimeline();
  }
  

  function updateTimeline() {
    // Changing the StartAt Value
    for (let i = 0; i < numAssets; i++) {
        var el = document.querySelector("#player");

        el.setAttribute("animation-mixer", {
            clip: "High_Kick",
            startAt: slider.value,
        });

        el.setAttribute("animation-mixer", {
            clip: "Idle",
        });


        el.setAttribute("animation-mixer", {
            clip: "High_Kick",
            timeScale: 0.0001,
        });
        
      }
  }

  function releaseTimeline() {
        for (let i = 0; i < numAssets; i++) {
          var el = document.querySelector("#player");
          el.setAttribute("animation-mixer", {
            timeScale: 0,
          });
      }
  }

  function updateCoral() {
    var el1 = document.querySelector("#coral-red");

    var el2 = document.querySelector("#coral-red-2");

    var num = (slider.value / 4100000);

    el1.setAttribute("model-opacity", 1 - num);

    el2.setAttribute("model-opacity", 1 - num);

  }



// Opacity Changes
AFRAME.registerComponent('model-opacity', {
  schema: {default: 1.0},
  init: function () {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function () {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) { return; }
    mesh.traverse(function (node) {
      if (node.isMesh) {
        node.material.opacity = data;
        node.material.transparent = data < 1.0;
        node.material.needsUpdate = true;
      }
    });
  }
});