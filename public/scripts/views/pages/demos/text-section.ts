import * as Marionette from "marionette";
import * as NineTails from "nine-tails";

import { LengthSetView } from "../../length-set";

export class TextSectionView extends Marionette.LayoutView<Backbone.Model> {

   public fontSize: NineTails.Size;
   public font: NineTails.Style;
   public bold: NineTails.Style;
   public italic: NineTails.Style;

   public constructor(app: NineTailsSiteApp) {
      super();
      var fontRule = app.theme.createRule("#font-example");
      this.font = new NineTails.Style();
      fontRule.linkStyle("font-family", this.font);

      this.fontSize = new NineTails.Size(16, NineTails.SizeType.Pixels);
      var textSizeRule = app.theme.createRule("#text-size-example");
      textSizeRule.linkStyle("font-size", this.fontSize);

      this.bold = new NineTails.Style();
      var textStyleRule = app.theme.createRule("#text-style-example");
      textStyleRule.linkStyle("font-weight", this.bold);

      this.italic = new NineTails.Style();
      textStyleRule.linkStyle("font-style", this.italic);
   }

   public onAttach(){
      this.font.setValue(this.el.querySelector("#font-select").value);
      this.el.querySelector("#font-select").onchange = () => {
         this.font.setValue(this.el.querySelector("#font-select").value);
      };
      this.el.querySelector("#text-size").value = this.fontSize.get();
      this.el.querySelector("#text-size").oninput = () => { this.fontSize.set(parseInt(this.el.querySelector("#text-size").value), NineTails.SizeType.Pixels); };


      var textItalicInput = <HTMLInputElement>document.documentElement.querySelector("#text-italic");
      if (textItalicInput.checked) {
         this.italic.setValue("italic");
      }
      else {
         this.italic.setValue("normal");
      }
      textItalicInput.onchange = () =>  {
        if (textItalicInput.checked) {
           this.italic.setValue("italic");
        }
        else {
           this.italic.setValue("normal");
        }
   };

   var textBoldInput = <HTMLInputElement>document.documentElement.querySelector("#text-bold");
   if (textBoldInput.checked) {
      this.bold.setValue("bold");
   }
   else {
      this.bold.setValue("normal");
   }
   textBoldInput.onchange = () =>  {
     if (textBoldInput.checked) {
        this.bold.setValue("bold");
     }
     else {
        this.bold.setValue("normal");
     }
};
}

public template: () => string = () => `


<h2>Text</h2>
<h3>Font</h3>
<select id="font-select">
<option>inherit</option>
<option>sans-serif</option>
<option>serif</option>
<option>cursive</option>
<option>fantasy</option>
<option>monospace</option>
</select>
<span id="font-example">Check me out in various different fonts</span>
<h3>Size</h3>
<div class="slider">
<label>size</label>
<input type="range" id="text-size" min="8" value="16" max="48" />
</div>
<span id="text-size-example">I shift my size to suit you</span>
<h3>Style</h3>
<label>bold</label>
<input type="checkbox" id="text-bold" />
<label>italic</label>
<input type="checkbox" id="text-italic" />
<span id="text-style-example">Draw the right amount of emphasis</span>`;
}
