import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { CustomStyleModel } from "../../../models/custom-style";

export class CustomStyleView extends Marionette.ItemView<CustomStyleModel> {

  public style: NineTails.Style;
  public rule: NineTails.Rule;

  public constructor(options: any) {
    super();
    this.rule = options.rule;
    this.style = new NineTails.Style();
    this.model = options.model;
    options.model.on("change:name", this._updateStyleName, this);
    options.model.on("change:value", this._updateStyleValue, this);
    this._updateStyleName();
    this._updateStyleValue();
  }

  public onRender() {
     this.el.querySelector(".custom-style-name").value = this.model.get("name");
        this.el.querySelector(".custom-style-value").value = this.model.get("value");
 }

  public onAttach() {
    this.el.querySelector(".custom-style-name").oninput = () => this.model.set("name", this.el.querySelector(".custom-style-name").value);
    this.el.querySelector(".custom-style-value").oninput = () => this.model.set("value", this.el.querySelector(".custom-style-value").value);
  }

  private _updateStyleName() {
    this.rule.linkStyle(this.model.get("name"), this.style);
  }

  private _updateStyleValue() {
    this.style.setValue(this.model.get("value"));
  }

  public template: () => string = () => `
      <input type="text" class="custom-style-name" />
      <input type="text" class="custom-style-value" />
    `;
}
