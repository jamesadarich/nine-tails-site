import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

export class RgbColorSetView extends Marionette.LayoutView<Backbone.Model> {

     public color: NineTails.Color;
  public contrastColor: NineTails.Color;
  public labelText: string;

  public constructor(labelText: string, color: NineTails.Color, selector: string, app: NineTailsSiteApp) {
    super();
    this.color = color;
    this.labelText = labelText;
    var rule = app.theme.createRule(selector + " .rgb-color-set");
    rule.linkStyle("background-color", color);
    this.contrastColor = new NineTails.Color("rgb(0,0,0)");
    rule.linkStyle("color", this.contrastColor);
    this.color.onSet(this._updateContrastColor, this);
    this._updateContrastColor();
  }

  private _updateContrastColor() {

      if(this.color.lightness > 50) {
         this.contrastColor.setRgb(0, 0, 0);
      }
      else {
         this.contrastColor.setRgb(255, 255, 255);
      }
 }

  public onRender() {
    this.el.className = "rgb-color-set";
    this.el.querySelector("label").innerHTML = this.labelText;
  }

  public onAttach() {
    this.el.querySelector(".red").value = this.color.red;
    this.el.querySelector(".red").oninput = () => this._updateColor();

    this.el.querySelector(".green").value = this.color.green;
    this.el.querySelector(".green").oninput = () => this._updateColor();

    this.el.querySelector(".blue").value = this.color.blue;
    this.el.querySelector(".blue").oninput = () => this._updateColor();
  }

  _updateColor() {
     this.color.setRgb(parseInt(this.el.querySelector(".red").value), parseInt(this.el.querySelector(".green").value), parseInt(this.el.querySelector(".blue").value));
 }

  public template: () => string = () => `
  <label></label>
  <div class="slider">
  <label>red</label>
  <input type="range" class="red" max="255" />
  </div>
  <div class="slider">
  <label>green</label>
  <input type="range" class="green" max="255" />
  </div>
  <div class="slider">
  <label>blue</label>
  <input type="range" class="blue" max="255"/>
  </div>`;
}
