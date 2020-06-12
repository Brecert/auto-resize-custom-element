customElements.define(
  "auto-resize",
  class extends HTMLTextAreaElement {
    autoResize() {
      requestAnimationFrame(() => {
        const lhpx = getComputedStyle(this).getPropertyValue("line-height");
        const lh = parseInt(lhpx);
        this.style.height = "";
        this.style.height = `${1 + Math.floor(this.scrollHeight / lh) * lh}px`;
      });
    }

    connectedCallback() {
      if (this.isConnected) {
        this.autoResize();
        this.addEventListener("input", this, false);
      }
    }

    disconnectedCallback() {
      this.removeEventLister("input", this, false);
    }

    handleEvent(event) {
      if (event.type === "input") {
        this.autoResize();
      }
    }
  },
  { extends: "textarea" }
);
