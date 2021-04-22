//object example
/*var keyboard = {
    name: "keyboard name",
    layout: "keyboard layout",
    mountingSystem: "mounting system",
    plateMaterial: "plate material",
    switchName: "switch name",
    switchType: "switch type"
}*/

//object constructor
function Keyboard(name, layout, mountingSystem, plateMaterial, switchName, switchType) {
    this.name = name;
    this.layout = layout;
    this.mountingSystem = mountingSystem;
    this.plateMaterial = plateMaterial;
    this.switchName = switchName;
    this.switchType = switchType;
    this.actuate = function () {
        console.log("thock");
    }
}

//object declaration
let keyboard1 = new Keyboard("Leaf65", "65%", "Sandwich poron gasket", "Aluminum skeleton plate", "Gateron ink black", "Linear");
let keyboard2 = new Keyboard("Ikki68 Aurora", "65%", "Sandwich poron gasket", "FR4", "Gateron ink black", "Linear");

console.log(keyboard1);
keyboard1.actuate();

