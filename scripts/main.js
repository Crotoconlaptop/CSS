document.addEventListener("DOMContentLoaded", () => {
    // 🎯 SELECTORS
    const testBox = document.getElementById("test-box");
    const output = document.getElementById("style-output");
  
    const styleMap = {
      class: { classList: ["box"], label: ".box", style: null },
      "class-highlight": { classList: ["box", "highlight"], label: ".box.highlight", style: null },
      id: { classList: ["box"], label: "#test-box (inline)", style: { backgroundColor: "violet" } },
      important: { classList: ["box", "important"], label: ".box !important", style: null },
      reset: { classList: ["box"], label: ".box", style: null }
    };
  
    document.querySelectorAll(".selector-controls button").forEach(button => {
      button.addEventListener("click", () => {
        const type = button.dataset.style;
        const config = styleMap[type];
  
        testBox.className = ""; // Reset classes
        testBox.style = "";     // Reset inline styles
        testBox.classList.add(...config.classList);
  
        if (config.style) {
          Object.entries(config.style).forEach(([prop, value]) => {
            testBox.style[prop] = value;
          });
        }
  
        output.textContent = config.label;
      });
    });
  
    // 📦 BOX MODEL
    const boxModelBox = document.querySelector(".box-model-example");
    const paddingSlider = document.getElementById("padding-slider");
    const borderSlider = document.getElementById("border-slider");
    const marginSlider = document.getElementById("margin-slider");
  
    function updateBoxModel() {
      boxModelBox.style.padding = `${paddingSlider.value}px`;
      boxModelBox.style.borderWidth = `${borderSlider.value}px`;
      boxModelBox.style.margin = `${marginSlider.value}px`;
    }
  
    [paddingSlider, borderSlider, marginSlider].forEach(slider =>
      slider.addEventListener("input", updateBoxModel)
    );
    updateBoxModel();
  
    // 🧱 FLEXBOX
    const flexboxContainer = document.getElementById("flexbox-container");
    const flexDirectionSelect = document.getElementById("flex-direction");
    const justifyContentSelect = document.getElementById("justify-content");
  
    function updateFlexbox() {
      flexboxContainer.style.flexDirection = flexDirectionSelect.value;
      flexboxContainer.style.justifyContent = justifyContentSelect.value;
    }
  
    flexDirectionSelect.addEventListener("change", updateFlexbox);
    justifyContentSelect.addEventListener("change", updateFlexbox);
    updateFlexbox();
  });

  // ✨ Scroll-triggered animation for section appearance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });
  
  