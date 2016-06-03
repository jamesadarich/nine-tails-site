import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { HslColorSetView } from "../../hsl-color-set";

export class ThemingSectionView extends Marionette.LayoutView<Backbone.Model> {


   public constructor(app: NineTailsSiteApp) {
      super();
      //this.setElement(document.createElement("section"));
      this.addRegion("primaryColor", "#primary-color");
      this.addRegion("secondaryColor", "#secondary-color");
      this.addRegion("backgroundColor", "#background-color");
      this.addRegion("headingColor", "#heading-color");
      this.addRegion("textColor", "#text-color");
      this.primaryColorSetView = new HslColorSetView("Primary color", app.primaryColor, "#primary-color", app);
      this.secondaryColorSetView = new HslColorSetView("Secondary color", app.secondaryColor, "#secondary-color", app);
      this.textColorSetView = new HslColorSetView("Text color", app.textColor, "#text-color", app);
      this.headingColorSetView = new HslColorSetView("Heading color", app.headingColor, "#heading-color", app);
      this.backgroundColorSetView = new HslColorSetView("Background color", app.backgroundColor, "#background-color", app);
   }

   public onRender(){
      this.primaryColor.show(this.primaryColorSetView);
      this.secondaryColor.show(this.secondaryColorSetView);
      this.textColor.show(this.textColorSetView);
      this.headingColor.show(this.headingColorSetView);
      this.backgroundColor.show(this.backgroundColorSetView);
   }

   public primaryColorSetView: HslColorSetView;
   public secondaryColorSetView: HslColorSetView;
   public textColorSetView: HslColorSetView;
   public headingColorSetView: HslColorSetView;
   public backgroundColorSetView: HslColorSetView;
   public primaryColor: Marionette.Region;
   public secondaryColor: Marionette.Region;
   public backgroundColor: Marionette.Region;
   public headingColor: Marionette.Region;
   public textColor: Marionette.Region;


   public template: () => string = () => `

   <h2>Theming</h2>
   <p>
   Making things look good, let"s face it, is one of the most important things when creating anything.
   Everyone knows not to judge a book by it"s cover but with ever evolving competition it"s difficult to stand out from the crowd.
   On top of that it"s not just important for things to look good in general, but to also meet everyone"s individual visual requirements.
   </p>
   <p>
   With so many considerations we need to have a sound solution to ensure our products look great, are configurable at an instance and in the easiest way possible.
   </p>
   <p>... and with that let us introduce Ninetails.js, it solves this issue and let"s prove it first by letting you change our theme...</p>
   <div id="primary-color"></div>
   <div id="secondary-color"></div>
   <div id="background-color"></div>
   <div id="heading-color"></div>
   <div id="text-color"></div>
   <p>Right now we"ve had a lot of fun tinkering let"s find out what Ninetails.js can do</p>`;
}
