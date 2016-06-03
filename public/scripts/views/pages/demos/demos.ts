import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { ThemingSectionView } from "./theming-section";
import { SizeSectionView } from "./size-section";
import { SpacingSectionView } from "./spacing-section";
import { PositionSectionView } from "./position-section";
import { TextSectionView } from "./text-section";
import { ColorSectionView } from "./color-section";
import { CustomSectionView } from "./custom-section";

export class DemosPage extends Marionette.LayoutView<Backbone.Model> {

  public themingSection: Marionette.Region;
  public themingSectionView: ThemingSectionView;
  public sizeSection: Marionette.Region;
  public sizeSectionView: SizeSectionView;
  public spacingSection: Marionette.Region;
  public spacingSectionView: SpacingSectionView;
  public positionSection: Marionette.Region;
  public positionSectionView: PositionSectionView;
  public textSection: Marionette.Region;
  public textSectionView: TextSectionView;
  public colorSection: Marionette.Region;
  public colorSectionView: ColorSectionView;
  public customSection: Marionette.Region;
  public customSectionView: CustomSectionView;

  public constructor(app: NineTailsSiteApp) {
    super();
    this.addRegion("themingSection", "#theming-section");
    this.addRegion("sizeSection", "#size-section");
    this.addRegion("spacingSection", "#spacing-section");
    this.addRegion("positionSection", "#position-section");
    this.addRegion("textSection", "#text-section");
    this.addRegion("colorSection", "#color-section");
    this.addRegion("customSection", "#custom-section");

    this.themingSectionView = new ThemingSectionView(app);
    this.sizeSectionView = new SizeSectionView(app);
    this.spacingSectionView = new SpacingSectionView(app);
    this.positionSectionView = new PositionSectionView(app);
    this.textSectionView = new TextSectionView(app);
    this.colorSectionView = new ColorSectionView(app);
    this.customSectionView = new CustomSectionView(app);
  }

  public onRender() {
    this.themingSection.show(this.themingSectionView);
    this.sizeSection.show(this.sizeSectionView);
    this.spacingSection.show(this.spacingSectionView);
    this.positionSection.show(this.positionSectionView);
    this.textSection.show(this.textSectionView);
    this.colorSection.show(this.colorSectionView);
    this.customSection.show(this.customSectionView);
  }

  public template: () => string = () => `
  <section id="theming-section"></section>
  <section id="size-section"></section>
  <section id="spacing-section"></section>
  <section id="position-section"></section>
  <section id="text-section"></section>
  <section id="color-section"></section>
  <section id="custom-section"></section>`;
}
