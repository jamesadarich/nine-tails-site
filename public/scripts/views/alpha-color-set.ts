import * as Marionette from "marionette";

export class AlphaColorSetView extends Marionette.LayoutView<Backbone.Model> {

     public color: NineTails.Color;
  public labelText: string;

  public constructor(color: NineTails.Color, selector: string, app: NineTailsSiteApp) {
    super();
    this.color = color;

    var rule = app.theme.createRule(selector + " .alpha-result");
    rule.linkStyle("background-color", color);
  }

  public onAttach() {
    this.el.querySelector(".alpha").value = this.color.alpha;
    this.el.querySelector(".alpha").oninput = () => this._updateColor();
  }

  _updateColor() {
     this.color.setRgba(0, 0, 0, parseFloat(this.el.querySelector(".alpha").value));
 }

  public template: () => string = () => `

  <input type="range" class="alpha" step="0.01" max="1" value="1"/>
  <div class="alpha-container">
     <div class="hidden-text">Here I am</div>
     <div class="alpha-result"></div>
  </div>`;
}
