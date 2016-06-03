import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { HslColorSetView } from "../../hsl-color-set";

export class PalletteView extends Marionette.LayoutView<Backbone.Model> {

    public baseColorView: HslColorSetView;
    public baseColorSection: Marionette.Region;
    public baseColor: NineTails.Color;
    public complimentaryColor: NineTails.Color;
    public splitComplimentaryOne: NineTails.Color;
    public splitComplimentaryTwo: NineTails.Color;
    public triadOne: NineTails.Color;
    public triadTwo: NineTails.Color;
    public analagousOne: NineTails.Color;
    public analagousTwo: NineTails.Color;
    public shades: NineTails.Color[];

  public constructor(baseColor: NineTails.Color, app: NineTailsSiteApp) {
    super();
    this.baseColor = baseColor;
    this.baseColor.onSet(this.onUpdateBaseColor, this);

    var baseColorRule = app.theme.createRule(".base-color");
    baseColorRule.linkStyle("background-color", this.baseColor);

    this.addRegion("baseColorSection", ".base-color");
    this.baseColorView = new HslColorSetView("base color", this.baseColor, ".base-color", app);

    this.complimentaryColor = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".complimentary-color");
    complimentaryColorRule.linkStyle("background-color", this.complimentaryColor);

    this.splitComplimentaryOne = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".split-complimentary-color-1");
    complimentaryColorRule.linkStyle("background-color", this.splitComplimentaryOne);

    this.splitComplimentaryTwo = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".split-complimentary-color-2");
    complimentaryColorRule.linkStyle("background-color", this.splitComplimentaryTwo);

    this.triadOne = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".triad-color-1");
    complimentaryColorRule.linkStyle("background-color", this.triadOne);

    this.triadTwo = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".triad-color-2");
    complimentaryColorRule.linkStyle("background-color", this.triadTwo);

    this.analagousOne = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".analagous-color-1");
    complimentaryColorRule.linkStyle("background-color", this.analagousOne);

    this.analagousTwo = new NineTails.Color("");
    var complimentaryColorRule = app.theme.createRule(".analagous-color-2");
    complimentaryColorRule.linkStyle("background-color", this.analagousTwo);

    this.shades = [];
    for (var i = 0; i <=10; i ++) {
      this.shades.push(new NineTails.Color(""));
      var shadeRule = app.theme.createRule(".shade-color-" + i * 10);
      shadeRule.linkStyle("background-color", this.shades[i]);
    }

    this.onUpdateBaseColor();
  }

  public onUpdateBaseColor() {
    this.complimentaryColor.setHsl(this.baseColor.hue + 180, this.baseColor.saturation, this.baseColor.lightness);

    this.splitComplimentaryOne.setHsl(this.baseColor.hue + 150, this.baseColor.saturation, this.baseColor.lightness);
    this.splitComplimentaryTwo.setHsl(this.baseColor.hue + 210, this.baseColor.saturation, this.baseColor.lightness);

    this.triadOne.setHsl(this.baseColor.hue + 240, this.baseColor.saturation, this.baseColor.lightness);
    this.triadTwo.setHsl(this.baseColor.hue + 120, this.baseColor.saturation, this.baseColor.lightness);

    this.analagousOne.setHsl(this.baseColor.hue + 30, this.baseColor.saturation, this.baseColor.lightness);
    this.analagousTwo.setHsl(this.baseColor.hue - 30, this.baseColor.saturation, this.baseColor.lightness);

    for (var i = 0; i < this.shades.length; i++) {
      this.shades[i].setHsl(this.baseColor.hue, this.baseColor.saturation, i * 10);
    }
  }

  public onRender() {
    this.baseColorSection.show(this.baseColorView);
  }

  public template: () => string = () => `


     <div class="base-color">
        <input type="range" class="hue" max="360" />
        <input type="range" class="saturation" max="100" />
        <input type="range" class="lightness" max="100" />
     </div><div class="computed-colors">
        <label>Complimentary</label>
        <div class="complimentary-color"></div>
        <label>Split complimentary</label>
        <div class="split-complimentary-colors">
           <div class="split-complimentary-color-1"></div>
           <div class="base-color"></div>
           <div class="split-complimentary-color-2"></div>
        </div>
        <label>Triad</label>
        <div class="triad-colors">
           <div class="triad-color-1"></div>
           <div class="base-color"></div>
           <div class="triad-color-2"></div>
        </div>
        <label>Analagous</label>
        <div class="analagous-colors">
           <div class="analagous-color-1"></div>
           <div class="base-color"></div>
           <div class="analagous-color-2"></div>
        </div>
     </div>
     <div class="shades">
        <label>Shades</label>
        <div class="shade-color-0"></div>
        <div class="shade-color-10"></div>
        <div class="shade-color-20"></div>
        <div class="shade-color-30"></div>
        <div class="shade-color-40"></div>
        <div class="shade-color-50"></div>
        <div class="shade-color-60"></div>
        <div class="shade-color-70"></div>
        <div class="shade-color-80"></div>
        <div class="shade-color-90"></div>
        <div class="shade-color-100"></div>
     </div>
  `;
}
