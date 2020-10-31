function createComputerHierarchy() {
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Can not instantiare directli")
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = null;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (value instanceof Battery == false) {
                throw new TypeError("Laptop battery must be an instance of Battery");
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = null;
            this.keyboard = keyboard;
            this._monitor = null;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value instanceof Keyboard == false) {
                throw new TypeError("Desktop keybord must be an instance of Keyboard");
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value instanceof Monitor == false) {
                throw new TypeError("Desktop monitor must be an instance of Monitor");
            }
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let comp = createComputerHierarchy();
let battery = new comp.Battery("Lenovo", 2000);
const a = new comp.Laptop("Lenovo", 4, 8, 32323, 1.3, 'red', battery)
console.log(a)

let keyboard = new comp.Keyboard("Samsung", 343434);
let monitor = new comp.Monitor("Samsung", 12, 12)
const b = new comp.Desktop("Asus", 4, 16, 1000, keyboard, monitor)
console.log(b);

