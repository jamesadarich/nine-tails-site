import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { HslColorSetView } from "../../hsl-color-set";
import { RgbColorSetView } from "../../rgb-color-set";
import { AlphaColorSetView } from "../../alpha-color-set";
import { FreeTextColorSetView } from "../../free-text-color-set";
import { RaveColorPanelView } from "./rave-panel";
import { PalletteView } from "./pallette";

export class ColorSectionView extends Marionette.LayoutView<Backbone.Model> {

  public hslExampleView: HslColorSetView;
  public hslExampleSection: Marionette.Region;
    public rgbExampleView: RgbColorSetView;
    public rgbExampleSection: Marionette.Region;
      public alphaExampleView: AlphaColorSetView;
      public alphaExampleSection: Marionette.Region;
        public colorNameExampleView: FreeTextColorSetView;
        public colorNameExampleSection: Marionette.Region;
         public ravePanelExampleView: RaveColorPanelView;
         public ravePanelExampleSection: Marionette.Region;
          public palletteExampleView: PalletteView;
          public palletteExampleSection: Marionette.Region;

  public constructor(app: NineTailsSiteApp) {
    super();
    var rule = app.theme.createRule("#moving-example");
    //this.setElement(document.createElement("section"));
    var rgbColor = new NineTails.Color("");
    rgbColor.setRgb(255, 50, 50);
    this.rgbExampleView = new RgbColorSetView("", rgbColor, "#rgb-output", app);

    this.addRegion("rgbExampleSection", "#rgb-output");

    var hslColor = new NineTails.Color("");
    hslColor.setHsl(0, 50, 50);
    this.hslExampleView = new HslColorSetView("", hslColor, "#hsl-output", app);

    this.addRegion("hslExampleSection", "#hsl-output");

    var alphaColor = new NineTails.Color("");
    alphaColor.setRgba(0, 0, 0, 1.0);
    this.alphaExampleView = new AlphaColorSetView(alphaColor, "#alpha-example", app);

    this.addRegion("alphaExampleSection", "#alpha-example");

    var namedColor = new NineTails.Color("");
    namedColor.set("cyan");
    this.colorNameExampleView = new FreeTextColorSetView(namedColor, "#color-name-result", app);

    this.addRegion("colorNameExampleSection", "#color-name-result");

    this.ravePanelExampleView = new RaveColorPanelView(app, 100, 1196, 200);
        this.addRegion("ravePanelExampleSection", "#rave-panel");

        this.addRegion("colorNameExampleSection", "#color-name-result");

            var palletteBaseColor = new NineTails.Color("");
            palletteBaseColor.setHsl(180, 50, 50);
        this.palletteExampleView = new PalletteView(palletteBaseColor, app);
            this.addRegion("palletteExampleSection", "#pallette");
  }

  public onAttach(){
     this.hslExampleSection.show(this.hslExampleView);
        this.rgbExampleSection.show(this.rgbExampleView);
          this.alphaExampleSection.show(this.alphaExampleView);
            this.colorNameExampleSection.show(this.colorNameExampleView);
             this.ravePanelExampleSection.show(this.ravePanelExampleView);
              this.palletteExampleSection.show(this.palletteExampleView);
  }

  public template: () => string = () => `

  <h2>Color</h2>
  <h3>RGB</h3>
  <p>It"s everyone"s favourite color model and suprise! You can use it here</p>
  <div id="rgb-output"></div>
  <h3>HSL</h3>
  <p>You fancy pants hipsters wanna use some HSL? by all means!</p>
  <div id="hsl-output">
  </div>
     <h3>Alpha</h3>
     <p>Want to see through the mess, just set that alpha!</p>
     <div id="alpha-example"></div>
<h3>Style your heart out</h3>
<p>Switch styles regularly? Want your users to change their style easily? Previews as you go? No problemo!</p>
<div id="color-name-result"></div>
<h3>Change it very quickly</h3>
<p>That's no problem, let's rave!</p>
<div id="rave-panel"></div>
<div id="pallettes">
 <h3>Pallettes</h3>
 <div id="pallette"></div>
</div>`;
}
