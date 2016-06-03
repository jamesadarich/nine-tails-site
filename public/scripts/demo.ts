import * as NineTails from "nine-tails";

var theme = new NineTails.Theme();
var ruleOne = theme.createRule("header");
//var ruleTwo = theme.createRule("h1, h2, h3");
var ruleTwo = theme.createRule("H1");
var ruleThree = theme.createRule("p");
var ruleAccent = theme.createRule("#menu-button");
var body = theme.createRule("BODY");

var primaryColor = new NineTails.Color("rgb(255, 0, 0)");
var headingColor = new NineTails.Color("rgb(0, 0, 0)");
var textColor = new NineTails.Color("rgb(0, 0, 0)");
var accentColor = new NineTails.Color("rgb(0, 0, 0)");
var backgroundColor = new NineTails.Color("rgb(240, 240, 240)");
ruleAccent.linkStyle("background-color", accentColor);

body.linkStyle("background-color", backgroundColor);

ruleOne.linkStyle("background-color", primaryColor);
ruleTwo.linkStyle("color", headingColor);
body.linkStyle("color", textColor);

var rgbOuputResult = theme.createRule("#rgb-output");
var rgbExampleColor = new NineTails.Color("rgb(0, 255, 255)");
rgbOuputResult.linkStyle("background-color", rgbExampleColor);

var hslOuputResult = theme.createRule("#hsl-output");
var hslExampleColor = new NineTails.Color("rgb(0, 255, 255)");
hslOuputResult.linkStyle("background-color", hslExampleColor);

var colorNameResult = theme.createRule("#color-name-result");
var colorNameColor = new NineTails.Color("rgb(0, 255, 255)");
colorNameResult.linkStyle("background-color", colorNameColor);

var alphaResult = theme.createRule("#alpha-result");
//var alphaColor = new NineTails.Color("rgba(0, 0, 0, 1.0)");
var alphaColor = new NineTails.Color("rgb(0, 0, 0)");
alphaResult.linkStyle("background-color", alphaColor);

var raveColors: any [] = [];

for (var i = 1; i <= 20; i++) {

   var rapidChangeResult = theme.createRule(".rave-item-" + i);
   var rapidChangeColor = new NineTails.Color("rgb(0, 255, 0)");
   rapidChangeResult.linkStyle("background-color", rapidChangeColor);
   raveColors.push(rapidChangeColor);
}

setInterval(function () {
   for(var i = 0; i < raveColors.length; i++) {
      raveColors[i].setRgb(Math.round(Math.random() * 255), Math.round(Math.random() * 255),Math.round(Math.random() * 255));
   }

}, 200);

//***** PALLETTES *******//


var palletteMainColorRule = theme.createRule(".pallette .main-color");
var palletteMainColor = new NineTails.Color("rgb(0, 255, 0)");
palletteMainColorRule.linkStyle("background-color", palletteMainColor);

var palletteContrastColorRule = theme.createRule(".pallette .computed-colors .complimentary-color");
var palletteContrastColor = new NineTails.Color("rgb(0, 255, 0)");
palletteContrastColorRule.linkStyle("background-color", palletteContrastColor);

var splitComplimentaryColor1Rule = theme.createRule(".pallette .computed-colors .split-complimentary-color-1");
var splitComplimentaryColor1 = new NineTails.Color("rgb(0, 255, 0)");
splitComplimentaryColor1Rule.linkStyle("background-color", splitComplimentaryColor1);

var splitComplimentaryColor2Rule = theme.createRule(".pallette .computed-colors .split-complimentary-color-2");
var splitComplimentaryColor2 = new NineTails.Color("rgb(0, 255, 0)");
splitComplimentaryColor2Rule.linkStyle("background-color", splitComplimentaryColor2);

var triad1Rule = theme.createRule(".pallette .computed-colors .triad-color-1");
var triad1 = new NineTails.Color("rgb(0, 255, 0)");
triad1Rule.linkStyle("background-color", triad1);

var triad2Rule = theme.createRule(".pallette .computed-colors .triad-color-2");
var triad2 = new NineTails.Color("rgb(0, 255, 0)");
triad2Rule.linkStyle("background-color", triad2);

var analagous1Rule = theme.createRule(".pallette .computed-colors .analagous-color-1");
var analagous1 = new NineTails.Color("rgb(0, 255, 0)");
analagous1Rule.linkStyle("background-color", analagous1);

var analagous2Rule = theme.createRule(".pallette .computed-colors .analagous-color-2");
var analagous2 = new NineTails.Color("rgb(0, 255, 0)");
analagous2Rule.linkStyle("background-color", analagous2);

//var addEvent = document.addEventListener || document.attachEvent;
//addEvent("DOMContentLoaded", function(event) {


   var createHslContrastColor = function (color: any) {
      var contrastColor = new NineTails.Color("");
      contrastColor.setHsl(0, 0, 100);
      if (color.lightness > 50) {
         contrastColor.setHsl(0, 0, 0);
      }
      color.onSet(function () {
         contrastColor.setHsl(0, 0, 100);
         if (color.lightness > 50) {
            contrastColor.setHsl(0, 0, 0);
         }
      }, contrastColor, undefined);

      return contrastColor;
   };

   var setColorHslHandlers = function (color: any, hueInputSelector: any, saturationchangeSelector: any, lightnessInpurSelector: any, colorIndicatorSelector: any) {
      var hueInput = <HTMLInputElement>document.documentElement.querySelector(hueInputSelector);
      var saturationchange = <HTMLInputElement>document.documentElement.querySelector(saturationchangeSelector);
      var lightnessInput = <HTMLInputElement>document.documentElement.querySelector(lightnessInpurSelector);
      hueInput.value = color.hue;
      saturationchange.value = color.saturation;
      lightnessInput.value = color.lightness;

      var colorIndicator = theme.createRule(colorIndicatorSelector);
      colorIndicator.linkStyle("background-color", color);

      var updateColor = function () {
         color.setHsl(parseInt(hueInput.value), parseInt(saturationchange.value), parseInt(lightnessInput.value));
      };;

      var contrast = createHslContrastColor(color);
      colorIndicator.linkStyle("color", contrast);
      colorIndicator.linkStyle("border-color", contrast);

      hueInput.onchange = updateColor;
      saturationchange.onchange = updateColor;
      lightnessInput.onchange = updateColor;

      hueInput.oninput = updateColor;
      saturationchange.oninput = updateColor;
      lightnessInput.oninput = updateColor;
   };

   primaryColor.setHsl(0, 80, 50);
   var primaryContrast = createHslContrastColor(primaryColor);
   theme.createRule("header h1").linkStyle("color", primaryContrast);
   setColorHslHandlers(primaryColor, "#primary-hue", "#primary-saturation", "#primary-lightness", "#primary-color");

   accentColor.setHsl(180, 80, 50);
   var accentContrast = createHslContrastColor(accentColor);
   theme.createRule("header button").linkStyle("color", accentContrast);
   setColorHslHandlers(accentColor, "#accent-hue", "#accent-saturation", "#accent-lightness", "#accent-color");

   backgroundColor.setHsl(180, 0, 90);
   setColorHslHandlers(backgroundColor, "#background-hue", "#background-saturation", "#background-lightness", "#background-color");

   headingColor.setHsl(180, 0, 0);
   setColorHslHandlers(headingColor, "#heading-hue", "#heading-saturation", "#heading-lightness", "#heading-color");

   textColor.setHsl(180, 0, 0);
   setColorHslHandlers(textColor, "#text-hue", "#text-saturation", "#text-lightness", "#text-color");

   var widthExample = new NineTails.Size(50, NineTails.SizeType.Percentage);
   var widthExampleRule = theme.createRule("#width-example");
   widthExampleRule.linkStyle("width", widthExample);
   var widthInput = <HTMLInputElement>document.documentElement.querySelector("#width");
   widthInput.onchange = function () { widthExample.set(parseInt(widthInput.value), NineTails.SizeType.Percentage); };

      var heightExample = new NineTails.Size(200, NineTails.SizeType.Pixels);
      var heightExampleRule = theme.createRule("#height-example");
      heightExampleRule.linkStyle("height", heightExample);
      var heightInput = <HTMLInputElement>document.documentElement.querySelector("#height");
      heightInput.onchange = function () { heightExample.set(parseInt(heightInput.value), NineTails.SizeType.Pixels); };

         var marginExample = new NineTails.Size(8, NineTails.SizeType.Pixels);
         var spacingExampleRule = theme.createRule("#spacing-result");
         spacingExampleRule.linkStyle("margin", marginExample);
         var marginInput = <HTMLInputElement>document.documentElement.querySelector("#margin");
         marginInput.onchange = function () { marginExample.set(parseInt(marginInput.value), NineTails.SizeType.Pixels); };

         var borderExample = new NineTails.Size(2, NineTails.SizeType.Pixels);
         spacingExampleRule.linkStyle("border-width", borderExample);
         var borderInput = <HTMLInputElement>document.documentElement.querySelector("#border");
         borderInput.onchange = function () { borderExample.set(parseInt(borderInput.value), NineTails.SizeType.Pixels); };

         var paddingExample = new NineTails.Size(8, NineTails.SizeType.Pixels);
         spacingExampleRule.linkStyle("padding", paddingExample);
         var paddingInput = <HTMLInputElement>document.documentElement.querySelector("#padding");
         paddingInput.onchange = function () { paddingExample.set(parseInt(paddingInput.value), NineTails.SizeType.Pixels); };

         // ****************** TEXT ************************

         var fontInput = <HTMLSelectElement>document.documentElement.querySelector("#font-select");
         var fontExample = new NineTails.Style();
         var fontRule = theme.createRule("#font-example");
         fontRule.linkStyle("font-family", fontExample);
         fontInput.onchange = function () {
         fontExample._value = fontInput.children[fontInput.selectedIndex].textContent;
         fontExample.notifyHandlers(); };

         var textSizeInput = <HTMLInputElement>document.documentElement.querySelector("#text-size");
         var textSizeExample = new NineTails.Size(parseInt(textSizeInput.value), NineTails.SizeType.Pixels);
         var textSizeRule = theme.createRule("#text-size-example");
         textSizeRule.linkStyle("font-size", textSizeExample);
         textSizeInput.onchange = function () { textSizeExample.set(parseInt(textSizeInput.value), NineTails.SizeType.Pixels); };

         var textBoldInput = <HTMLInputElement>document.documentElement.querySelector("#text-bold");
         var textBoldExample = new NineTails.Style();
         var textStyleRule = theme.createRule("#text-style-example");
         textStyleRule.linkStyle("font-weight", textBoldExample);
         textBoldInput.onchange = function () { if (textBoldInput.checked) {
            textBoldExample._value = "bold";
         }
         else {
            textBoldExample._value = "normal";
         }
         textBoldExample.notifyHandlers(); };

         var textItalicInput = <HTMLInputElement>document.documentElement.querySelector("#text-italic");
         var textItalicExample = new NineTails.Style();
         textStyleRule.linkStyle("font-style", textItalicExample);
         textItalicInput.onchange = function () { if (textItalicInput.checked) {
            textItalicExample._value = "italic";
         }
         else {
            textItalicExample._value = "normal";
         }
         textItalicExample.notifyHandlers(); };



         // ****************** POSITIONING *****************


         var xaxisExample = new NineTails.Size(0, NineTails.SizeType.Percentage);
         var positionRule = theme.createRule("#moving-example");
         positionRule.linkStyle("left", xaxisExample);
         var xaxisInput = <HTMLInputElement>document.documentElement.querySelector("#position-x");
         xaxisInput.onchange = function () { xaxisExample.set(parseInt(xaxisInput.value), NineTails.SizeType.Percentage); };

         var yaxisExample = new NineTails.Size(0, NineTails.SizeType.Pixels);
         positionRule.linkStyle("top", yaxisExample);
         var yaxisInput = <HTMLInputElement>document.documentElement.querySelector("#position-y");
         yaxisInput.onchange = function () { yaxisExample.set(parseInt(yaxisInput.value), NineTails.SizeType.Pixels); };


         // ******************* CUSTOM *********************

         var addCustomStyle = function () {

            var customStyleContainer = document.createElement("div");
            var customStyleNameInput = <HTMLInputElement>document.createElement("input");
            customStyleNameInput.type = "text";
            var customStyleValueInput = <HTMLInputElement>document.createElement("input");
            customStyleValueInput.type = "text";
            document.getElementById("custom-styles").appendChild(customStyleContainer);
            customStyleContainer.appendChild(customStyleNameInput);
            customStyleContainer.appendChild(customStyleValueInput);

            var customStyleRule = theme.createRule("#custom-example-result");
            var customStyle = new NineTails.Style();
            customStyleRule.linkStyle(customStyleNameInput.value, customStyle);

            var applyCustomStyle = function () {
               customStyle._value = customStyleValueInput.value;
               customStyle.notifyHandlers();
            };

            var changeCustomStyle = function (e: any) {
               console.log(e);
               customStyleRule.linkStyle(customStyleNameInput.value, customStyle);
            };

            customStyleNameInput.onchange = changeCustomStyle;
            customStyleValueInput.onchange = applyCustomStyle;
         };

         var addCustomStyleButton = <HTMLButtonElement>document.documentElement.querySelector("#add-custom-style");

         addCustomStyleButton.onclick = addCustomStyle;

var ravePanel = document.getElementById("rave-panel");
for(var i = 0; i < 200; i++ ){
   var raveItem = document.createElement("div");
   raveItem.className = "rave-item rave-item-" + Math.ceil(Math.random() * raveColors.length);
   ravePanel.appendChild(raveItem);
}

var colorNameInput = <HTMLInputElement>document.getElementById("color-name");
   colorNameInput.onchange = function () {
      colorNameColor.set(colorNameInput.value);
   };
var palletteHueInput = <HTMLInputElement>document.documentElement.querySelector(".hue");
var palletteSaturationchange = <HTMLInputElement>document.documentElement.querySelector(".saturation");
var palletteLightnessInput = <HTMLInputElement>document.documentElement.querySelector(".lightness");

var updatePalletteColor = function () {

palletteMainColor.setHsl(parseInt(palletteHueInput.value),
                         parseInt(palletteSaturationchange.value),
                         parseInt(palletteLightnessInput.value));
/*
var mainHsl = {
   h: parseInt(palletteHueInput.value) / 360,
   s: parseInt(palletteSaturationchange.value) / 100,
   l:parseInt(palletteLightnessInput.value) / 100
}

var mainRgb = hslToRgb(mainHsl);

var mainRyb = rgb2ryb(mainRgb);

var complimentRyb = {
   r: 255 - mainRyb.r,
   y: 255 - mainRyb.y,
   b: 255 - mainRyb.b
}

var complimentRgb = ryb2rgb(complimentRyb);
var complimentHsl = rgbToHsl(complimentRgb);

 palletteContrastColor.setHsl(complimentHsl.h * 360,
    parseInt(palletteSaturationchange.value),
   parseInt(palletteLightnessInput.value));

var splitCompliment1Ryb = {
   r: complimentRyb.r,
   y: complimentRyb.y,
   b: complimentRyb.b
}

var splitCompliment2Ryb = {
r: mainRyb.r,
y: mainRyb.y,
b: mainRyb.b
}

var max = Math.max(mainRyb.r, mainRyb.y, mainRyb.b);

if (mainRyb.r === max) {
   splitCompliment1Ryb.r -= 64;
   splitCompliment1Ryb.b -= 64;
   splitCompliment2Ryb.r -= 64;
   splitCompliment2Ryb.y -= 64;

   splitCompliment1Ryb.y += 64;
   splitCompliment2Ryb.b += 64;
}
else if (mainRyb.y === max) {
   splitCompliment1Ryb.y -= 64;
   splitCompliment1Ryb.b -= 64;
   splitCompliment2Ryb.y -= 64;
   splitCompliment2Ryb.r -= 64;

   splitCompliment1Ryb.b += 64;
   splitCompliment2Ryb.r += 64;
}
if (mainRyb.b === max) {
   splitCompliment1Ryb.r -= 64;
   splitCompliment1Ryb.b -= 64;
   splitCompliment2Ryb.b -= 64;
   splitCompliment2Ryb.y -= 64;

   splitCompliment1Ryb.r += 64;
   splitCompliment2Ryb.y += 64;
}

var splitCompliment1Rgb = ryb2rgb(splitCompliment1Ryb);
var splitCompliment1Hsl = rgbToHsl(splitCompliment1Rgb);
var splitCompliment2Rgb = ryb2rgb(splitCompliment2Ryb);
var splitCompliment2Hsl = rgbToHsl(splitCompliment2Rgb);
*/
palletteContrastColor.setHsl((parseInt(palletteHueInput.value) + 180),
   parseInt(palletteSaturationchange.value),
  parseInt(palletteLightnessInput.value));

splitComplimentaryColor1.setHsl((parseInt(palletteHueInput.value) + 150),
                         parseInt(palletteSaturationchange.value),
                         parseInt(palletteLightnessInput.value));

splitComplimentaryColor2.setHsl((parseInt(palletteHueInput.value) + 210),
                         parseInt(palletteSaturationchange.value),
                         parseInt(palletteLightnessInput.value));


 triad1.setHsl((parseInt(palletteHueInput.value) + 120),
                           parseInt(palletteSaturationchange.value),
                           parseInt(palletteLightnessInput.value));

  triad2.setHsl((parseInt(palletteHueInput.value) + 240),
                           parseInt(palletteSaturationchange.value),
                           parseInt(palletteLightnessInput.value));


  analagous1.setHsl((parseInt(palletteHueInput.value) + 30),
                            parseInt(palletteSaturationchange.value),
                            parseInt(palletteLightnessInput.value));

   analagous2.setHsl((parseInt(palletteHueInput.value) -30),
                            parseInt(palletteSaturationchange.value),
                            parseInt(palletteLightnessInput.value));
                        };

updatePalletteColor();

palletteHueInput.onchange = updatePalletteColor;
palletteSaturationchange.onchange = updatePalletteColor;
palletteLightnessInput.onchange = updatePalletteColor;

var rgbRedInput = <HTMLInputElement>document.documentElement.querySelector("#rgb-red");
var rgbGreenInput = <HTMLInputElement>document.documentElement.querySelector("#rgb-green");
var rgbBlueInput = <HTMLInputElement>document.documentElement.querySelector("#rgb-blue");

var updateRgbColor = function () {
   rgbExampleColor.setRgb(parseInt(rgbRedInput.value), parseInt(rgbGreenInput.value), parseInt(rgbBlueInput.value));
};


rgbRedInput.onchange = updateRgbColor;
rgbGreenInput.onchange = updateRgbColor;
rgbBlueInput.onchange = updateRgbColor;
rgbRedInput.oninput = updateRgbColor;
rgbGreenInput.oninput = updateRgbColor;
rgbBlueInput.oninput = updateRgbColor;

var hslHueInput = <HTMLInputElement>document.documentElement.querySelector("#hsl-hue");
var hslSaturationchange = <HTMLInputElement>document.documentElement.querySelector("#hsl-saturation");
var hslLightnessInput = <HTMLInputElement>document.documentElement.querySelector("#hsl-lightness");

var updateHslColor = function () {
   hslExampleColor.setHsl(parseInt(hslHueInput.value), parseInt(hslSaturationchange.value), parseInt(hslLightnessInput.value));
};


hslHueInput.onchange = updateHslColor;
hslSaturationchange.onchange = updateHslColor;
hslLightnessInput.onchange = updateHslColor;

var alphaInput = <HTMLInputElement>document.documentElement.querySelector("#alpha");
alphaColor.setRgba(0, 0, 0, 1);
var updateAlphaColor = function () {
   alphaColor.setRgba(alphaColor.red, alphaColor.green, alphaColor.blue, parseFloat(alphaInput.value));
};


alphaInput.onchange = updateAlphaColor;


//});
/*
var hslToRgb = function(hsl) {
   var h = hsl.h, s = hsl.s, l = hsl.l;
   var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
}*/
/*
var rgbToHsl = function (rgb) {
   var r = rgb.r;
   var g = rgb.g;
   var b = rgb.b;
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return {h:h, s:s, l:l}
}

var rgbToCmy = function (rgb) {
   return {
      c: 1 - (rgb.r / 255),
      m: 1 - (rgb.g / 255),
      y: 1 - (rgb.b / 255)
   }
}

var cmyToRgb = function (cmy) {
   return {
      r: (1 - cmy.c) * 255,
      g: (1 - cmy.m) * 255,
      b: (1 - cmy.y) * 255
   }
}
function rgb2ryb(rgb) {
    var r = rgb.r, g = rgb.g, b = rgb.b;
    // Remove the whiteness from the color.
    var w = Math.min(r, g, b);
    r -= w;
    g -= w;
    b -= w;

    var mg = Math.max(r, g, b);

    // Get the yellow out of the red+green.
    var y = Math.min(r, g);
    r -= y;
    g -= y;

    // If this unfortunate conversion combines blue and green, then cut each in
    // half to preserve the value"s maximum range.
    if (b && g) {
        b /= 2.0;
        g /= 2.0;
    }

    // Redistribute the remaining green.
    y += g;
    b += g;

    // Normalize to values.
    var my = Math.max(r, y, b);
    if (my) {
        var n = mg / my;
        r *= n;
        y *= n;
        b *= n;
    }

    // Add the white back in.
    r += w;
    y += w;
    b += w;

    // And return back the ryb typed accordingly.
    return { r : r, y: y, b: b };
}*/

/**
 * Convert a red-yellow-blue system to a red-green-blue system.
 */
 /*
function ryb2rgb(ryb) {
    var r = ryb.r, y = ryb.y, b = ryb.b;
    // Remove the whiteness from the color.
    var w = Math.min(r, y, b);
    r -= w;
    y -= w;
    b -= w;

    var my = Math.max(r, y, b);

    // Get the green out of the yellow and blue
    var g = Math.min(y, b);
    y -= g;
    b -= g;

    if (b && g) {
        b *= 2.0;
        g *= 2.0;
    }

    // Redistribute the remaining yellow.
    r += y;
    g += y;

    // Normalize to values.
    var mg = Math.max(r, g, b);
    if (mg) {
        var n = my / mg;
        r *= n;
        g *= n;
        b *= n;
    }

    // Add the white back in.
    r += w;
    g += w;
    b += w;

    // And return back the ryb typed accordingly.
    return {r: r, g: g, b:b};
}*/
