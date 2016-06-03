import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

export class HomePage extends Marionette.LayoutView<Backbone.Model> {

   public constructor(app: NineTailsSiteApp) {
      super();
      this.changes = [];
      var rule = app.theme.createRule("#example-container #example");
      var borderRadius = new NineTails.Style("0%");
      borderRadius._value = "0%";
      rule.linkStyle("border-radius", borderRadius);
      this.changes.push({
         title: "Shape it",
         styleValue: "100%",
         style: borderRadius
      });

      var backgroundColor = new NineTails.Style();
      backgroundColor._value = "#000";
      rule.linkStyle("background-color", backgroundColor);
      this.changes.push({
         title: "Color it",
         styleValue: "#F00",
         style: backgroundColor
      });

      var left = new NineTails.Style("47%");
      left._value = "47%";
      rule.linkStyle("margin-left", left);
      this.changes.push({
         title: "Move it",
         styleValue: "0%",
         style: left
      });

      var right = new NineTails.Style("47%");
      right._value = "47%";
      rule.linkStyle("margin-left", right);
      this.changes.push({
         title: "Move it",
         styleValue: "97%",
         style: right
      });

      var grow = new NineTails.Style("1.0");
      grow._value = "56px";
      rule.linkStyle("width", grow);
      rule.linkStyle("height", grow);
      this.changes.push({
         title: "Grow it",
         styleValue: "72px",
         style: grow
      });

      var shrink = new NineTails.Style("1.0");
      shrink._value = "56px";
      rule.linkStyle("width", shrink);
      rule.linkStyle("height", shrink);
      this.changes.push({
         title: "Shrink it",
         styleValue: "28px",
         style: shrink
      });
   }

   public changes: any[];

   public onRender() {
      this.getNewChange();
   }

   public getNewChange() {

      var random = Math.floor(Math.random() * this.changes.length);

      setTimeout(() => this.doIt(
         this.changes[random].title,
         this.changes[random].styleValue,
         this.changes[random].style), 400);
   }



   public doIt(title: string, styleValue: string, style: NineTails.Style) {
      var initialValue = style._value;
      this.el.querySelector("#showcase").innerHTML = title;
      style.setValue(styleValue);
      setTimeout(() => this.unDoIt(style, initialValue), 400);
   }

   public unDoIt(style: NineTails.Style, initialValue: string) {

     style.setValue(initialValue);
      setTimeout(() => this.getNewChange(), 400);
   }

   public template: () => string = () => `
    <div id="showcase">Style it</div>
    <div id="example-container"><div id="example"></div></div>
    <h2>Why do I need Ninetails?</h2>
    <p>Because it's awesome... and!</p>
    <table>
      <thead>
         <tr>
            <th>Features</th>
            <th>Ninetails</th>
            <th>JSS</th>
            <th>jQuery CSS</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Framework agnostic</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
         </tr>
         <tr>
            <td>Events</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-times"></i></td>
         </tr>
         <tr>
            <td>Programatic style changing</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-times"></i></td>
         </tr>
         <tr>
            <td>CSS compliant</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-times"></i></td>
         </tr>
         <tr>
            <td>TypeScript</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-times"></i></td>
         </tr>
         <tr>
            <td>Link styles together</td>
            <td><i class="fa fa-check"></i></td>
            <td><i class="fa fa-times"></i></td>
            <td><i class="fa fa-times"></i></td>
         </tr>
      </tbody>
    </table>
    `;
}
