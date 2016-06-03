import * as Marionette from "marionette";
import { NineTailsSiteApp } from "./app";

export class NineTailsRouter extends Marionette.AppRouter {

   public constructor(app: NineTailsSiteApp) {
      super({ routes: {}, appRoutes: {
        "": "showHome",
        "demos": "showDemos",
        "api": "showApi"
    },  controller: app });
   }
}
