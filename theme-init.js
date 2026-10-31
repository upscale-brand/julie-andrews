/* Apply the saved palette before first paint. */
(function () {
  try {
    var palette = localStorage.getItem("julie_andrews_palette");
    if (palette) document.documentElement.setAttribute("data-theme", palette);
  } catch (error) {}
})();

