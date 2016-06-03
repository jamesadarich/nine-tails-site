import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { CustomStyleListView } from "./custom-style-list";
import { CustomStyleModel } from "../../../models/custom-style";

export class CustomSectionView extends Marionette.LayoutView<Backbone.Model> {

  public customStyleListView: CustomStyleListView;
  public customStyleListContainer: Marionette.Region;
  public customStyles: Backbone.Collection<CustomStyleModel>;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#custom-example-result");
    this.customStyles = new Backbone.Collection<CustomStyleModel>();
    this.customStyles.add({ name: "height", value: "200px" });
    this.customStyles.add({ name: "background-color", value: "red" });
    this.addRegion("customStyleListContainer", "#custom-styles");
    this.customStyleListView = new CustomStyleListView(this.customStyles, rule);
  }

  public onAttach() {
    this.customStyleListContainer.show(this.customStyleListView);
    this.el.querySelector("#add-custom-style").onclick = () => this.customStyles.add({ name: "", value: "" });
  }

  public template: () => string = () => `


  <h2>Or anything else your heart desires...</h2>
  <p>If it"s in css (and supported by your target browser(s)) then you can use NineTails.js to work with it</p>
  <div id="custom-example">
     <div id="custom-styles-panel">
        <div id="custom-style-labels">
            <label>Style name</label>
            <label>Style value</label>
        </div>
        <div id="custom-styles">
        </div>
        <button type="button" id="add-custom-style">Add</button>
     </div>
     <div id="custom-container">
        <div id="custom-example-result"></div>
     </div>
     <div style="clear: both"></div>
  </div>`;
}
