import * as Marionette from "marionette";

export class SiteMenu extends Marionette.LayoutView<Backbone.Model> {

  public constructor() {
    super();
  }

  public onAttach() {
    this.$el.parent().on("click", () => { this.$el.parent().removeClass("show")});

  }

  public toggle() {
    this.$el.parent().toggleClass("show");
  }

  public template: () => string = () => `
    <header>
      <a href="#">
        <h1>ninetails</h1>
      </a>
    </header>
    <a href="#demos">
      <div class="menu-item">Demo</div>
    </a>
    <a href="#api">
      <div class="menu-item">API</div>
    </a>`;
}
