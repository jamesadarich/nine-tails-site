import * as Marionette from "marionette";
import * as Backbone from "backbone";
import * as NineTails from "nine-tails";
import { CustomStyleView } from "./custom-style";

export class CustomStyleListView extends Marionette.CollectionView<Backbone.Model, CustomStyleView> {

  public constructor(collection: Backbone.Collection<Backbone.Model>, rule: NineTails.Rule) {
    super({
      collection: collection,
      childView: CustomStyleView,
      childViewOptions: () => { return { rule: rule } }
    });
  }
}
