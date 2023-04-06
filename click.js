// This will toggle the visibility of the Markers

AFRAME.registerComponent('marker1', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("marker1text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });

  AFRAME.registerComponent('marker2', {
    schema: {
      default: ''
    },
    init: function () {
      this.el.addEventListener('click', function () {
        var x = document.getElementById("marker2text");

        if (x.getAttribute("visible") == true) {
            x.setAttribute("visible", false);
        } else {
            x.setAttribute("visible", true);
        }

      });
    }
  });