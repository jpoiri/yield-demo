import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set("tomsters", [
      {
        theme: "dc"
      },
      {
        theme: "pirate"
      },
      {
        theme: "louisville"
      },
      {
        theme: "bulgaria"
      },
      {
        theme: "russian"
      }
    ]);
  }
});
