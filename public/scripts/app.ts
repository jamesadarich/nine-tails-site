import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { NineTailsRouter } from "./router";
import { AppShellView } from "./views/app-shell";
import { NineTailsSiteTheme } from "./theme";

export class NineTailsSiteApp extends Marionette.Application {

  public router: NineTailsRouter;
  public theme: NineTails.Theme;
  public primaryColor: NineTails.Color;
  public secondaryColor: NineTails.Color;
  public textColor: NineTails.Color;
  public headingColor: NineTails.Color;
  public backgroundColor: NineTails.Color;
  private _appShell: AppShellView;

  public constructor() {
    super();

    this._createTheme();
      this._appShell = new AppShellView(this);

    this.addRegions({
      appContainer: "#nine-tails-site-app"
    });
    this.on("start", this._start, this);
  }

  private _createTheme(): void {

    this.theme = new NineTails.Theme();

    var ruleOne = this.theme.createRule("header");
    this.primaryColor = new NineTails.Color("rgb(255,0,0)");
    this.primaryColor.setHsl(0, 80, 45);
    ruleOne.linkStyle("background-color", this.primaryColor);

    var titleColor = this.theme.createRule("header h1");
    var primaryContrastColor = new NineTails.Color("rgb(255,255,255)");
    titleColor.linkStyle("color", primaryContrastColor);
    this.primaryColor.onSet(() => {
      if(this.primaryColor.lightness > 50) {
        primaryContrastColor.setRgb(0, 0, 0);
      }
      else {
        primaryContrastColor.setRgb(255, 255, 255);
      }
    }, this);

    var ruleTwo = this.theme.createRule("button");
    this.secondaryColor = new NineTails.Color("rgb(0, 200, 200)");
    this.secondaryColor.setHsl(180, 80, 45);
    ruleTwo.linkStyle("background-color", this.secondaryColor);
    var secondaryContrastColor = new NineTails.Color("rgb(255,255,255)");
    ruleTwo.linkStyle("color", secondaryContrastColor);
    this.secondaryColor.onSet(() => {
      if(this.secondaryColor.lightness > 50) {
        secondaryContrastColor.setRgb(0, 0, 0);
      }
      else {
        secondaryContrastColor.setRgb(255, 255, 255);
      }
    }, this);

    var generalRule = this.theme.createRule("body");
    this.textColor = new NineTails.Color("rgb(0, 0, 0)");
    this.textColor.setHsl(0, 0, 0);
    generalRule.linkStyle("color", this.textColor);

    this.backgroundColor = new NineTails.Color("rgb(255,255,255)");
    this.backgroundColor.setHsl(0, 0, 95);
    generalRule.linkStyle("background-color", this.backgroundColor);

    var headingRule = this.theme.createRule("h1, h2, h3");
    this.headingColor = new NineTails.Color("rgb(0, 0, 0)");
    this.headingColor.setHsl(0, 0, 0);
    headingRule.linkStyle("color", this.headingColor);
  }

  private _start(): void {
    this.getRegion("appContainer").show(this._appShell);
    this.router = new NineTailsRouter(this);
    if (Backbone.history) {
      Backbone.history.start();
    };

    (<any>window).mango = this;
  }

  public showHome(): void {
    this._appShell.showHome();
  }

  public showDemos(): void {
  this._appShell.showDemos();
  }

  public showApi(): void {
  this._appShell.showApi();
  }
}
