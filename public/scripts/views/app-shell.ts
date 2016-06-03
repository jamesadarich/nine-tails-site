import * as Marionette from "marionette";

import { DemosPage } from "./pages/demos/demos";
import { ApiPage } from "./pages/api/api";
import { HomePage } from "./pages/home/home";
import { SiteMenu } from "./site-menu";

export class AppShellView extends Marionette.LayoutView<Backbone.Model> {

  private _pageSection: Marionette.Region;
  private _currentPage: Marionette.LayoutView<Backbone.Model>;
    private _siteMenu: Marionette.Region;
    private _menu: SiteMenu;
    public pageTitle: string;
  private app: NineTailsSiteApp;

  public constructor(app: NineTailsSiteApp) {
    super();
    this.addRegion("_pageSection", "#page-section");
    this.addRegion("_siteMenu", "#menu");
    this._currentPage = new DemosPage(app);
    this._menu = new SiteMenu();
    this.app = app;
  }

  public onRender() {
    this.el.querySelector("#page-title").innerHTML = this.pageTitle;
    this.el.querySelector("#menu-button").onclick = () => this._menu.toggle();
    this._siteMenu.show(this._menu);
    this._pageSection.show(this._currentPage);
  }

  public showHome() {
    this._currentPage = new HomePage(this.app);
      this._pageSection.show(this._currentPage);
      this.pageTitle = "ninetails";
      this.el.querySelector("#page-title").innerHTML = this.pageTitle;
  }

  public showDemos() {
    this._currentPage = new DemosPage(this.app);
      this._pageSection.show(this._currentPage);
      this.pageTitle = "demos";
      this.el.querySelector("#page-title").innerHTML = this.pageTitle;
  }

  public showApi() {
    this._currentPage = new ApiPage(this.app);
      this._pageSection.show(this._currentPage);
      this.pageTitle = "api";
      this.el.querySelector("#page-title").innerHTML = this.pageTitle;
  }

  public template: () => string = () => `
    <section id="menu"></section>
    <header id="site-header">
      <button type="button" id="menu-button">
        <i class="fa fa-2x fa-bars"></i>
      </button>
      <h1 id="page-title"></h1>
    </header>
    <section id="page-section"></section>`;
}
