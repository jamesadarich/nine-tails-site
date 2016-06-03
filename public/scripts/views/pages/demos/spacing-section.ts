import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { LengthSetView } from "../../length-set";

export class SpacingSectionView extends Marionette.LayoutView<Backbone.Model> {

  public border: NineTails.Size;
  public margin: NineTails.Size;
  public padding: NineTails.Size;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule('#spacing-result');
    //this.setElement(document.createElement("section"));
    this.margin = new NineTails.Size(8, NineTails.SizeType.Pixels);
    rule.linkStyle("margin", this.margin);
    this.border = new NineTails.Size(2, NineTails.SizeType.Pixels);
    rule.linkStyle("border-width", this.border);
    this.padding = new NineTails.Size(8, NineTails.SizeType.Pixels);
    rule.linkStyle("padding", this.padding);
  }

  public onAttach(){
    this.el.querySelector('#margin').value = parseInt(this.margin.get());
    this.el.querySelector('#margin').oninput =() => this.margin.set(this.el.querySelector('#margin').value);
    this.el.querySelector('#border').value = parseInt(this.border.get());
    this.el.querySelector('#border').oninput = () => this.border.set(this.el.querySelector('#border').value);
    this.el.querySelector('#padding').value = parseInt(this.padding.get());
    this.el.querySelector('#padding').oninput = () => this.padding.set(this.el.querySelector('#padding').value);
  }

  public template: () => string = () => `

  <h2>Spacing</h2>
  <p>Space things out, you know you want to (or not - whatever)</p>
  <div id="spacing-sliders">
  <div class="slider">
  <label>margin</label>
  <input type="range" id="margin" max="20"/>
  </div>
  <div class="slider">
  <label>border</label>
  <input type="range" id="border" max="20"/>
  </div>
  <div class="slider">
  <label>padding</label>
  <input type="range" id="padding" max="20"/>
  </div>
  </div>
  <div id="spacing-example">
  <div id="spacing-result">
  <div id="spacing-example-content">Content</div>
  </div>
  </div>`;
}
