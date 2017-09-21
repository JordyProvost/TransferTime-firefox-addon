/*
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.mozilla.org/");
}
*/



var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "Transfer Time",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var panelwidth = 780;
var panelheight = 60;


var panel = panels.Panel({
	// creates addon Panel
	// External content do not execute scripts, we have to use "contentScriptFile:"
	// Trusted content can execute scripts
	width: panelwidth,
	height: panelheight,
	//contentURL: "https://en.wikipedia.org/w/index.php?title=Jetpack&useformat=mobile",
	contentURL: "./Panel.html",
	//contentURL: "http://www.bbc.co.uk/mobile/index.html",
	//contentScriptFile: "./script.js",
	//contentStyleFile: "./style.js"
	//contentStyleFile: self.data.url("style.css"),
	onHide: handleHide
});

panel.port.on("resize", function (w,h) {
	// wait for "resize" message from content to resize panel
	panel.resize(w,h);
});

function handleChange(state) {
  if (state.checked) {
	panel.resize(panelwidth,panelheight);
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}
