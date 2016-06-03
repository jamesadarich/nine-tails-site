import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

export class LengthSetView extends Marionette.LayoutView<Backbone.Model> {

  public color: NineTails.Color;
  public labelText: string;

  public constructor(labelText: string, length: NineTails.Size, selector: string, app: NineTailsSiteApp) {
    super();
    this.length = length;
    this.labelText = labelText;
    var rule = app.theme.createRule(selector);
    rule.linkStyle(labelText, length);
  }

  public onRender() {
    this.el.querySelector("label").innerHTML = this.labelText;
  }

  public onAttach() {
    this.el.querySelector("input").value = this.length.get();
    this.el.querySelector("input").oninput = () =>
      this.length.set(this.el.querySelector("input").value);
  }

  public template: () => string = () => `

     <div class="slider">
        <label></label>
        <input type="range" min="100" max="400"/>
     </div>`;
}
