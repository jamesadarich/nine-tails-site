import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { LengthSetView } from "../../length-set";

export class PositionSectionView extends Marionette.LayoutView<Backbone.Model> {

  public left: NineTails.Size;
  public top: NineTails.Size;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#moving-example");
    //this.setElement(document.createElement("section"));
    this.left = new NineTails.Size(0, NineTails.SizeType.Percentage);
    rule.linkStyle("left", this.left);
    this.top = new NineTails.Size(0, NineTails.SizeType.Pixels);
    rule.linkStyle("top", this.top);
  }

  public onAttach(){
    this.el.querySelector("#position-x").value = parseInt(this.left.get());
    this.el.querySelector("#position-x").oninput =() => this.left.set(this.el.querySelector("#position-x").value);
    this.el.querySelector("#position-y").value = parseInt(this.top.get());
    this.el.querySelector("#position-y").oninput = () => this.top.set(this.el.querySelector("#position-y").value);
  }

  public template: () => string = () => `

  <h2>Position</h2>
  <div id="position-controls">
     <div class="slider">
        <label>x</label>
        <input type="range" id="position-x" max="90" value="0"/>
     </div>
     <div class="slider">
        <label>y</label>
        <input type="range" id="position-y" max="350" value="0"/>
     </div>
  </div>
  <div id="position-example">
     <div id="moving-example"></div>
  </div>`;
}
