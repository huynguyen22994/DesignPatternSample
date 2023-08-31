class Transport {
    constructor(type) {
        this.type = type
    }

    deliver() { console.log('Deliver:::::', this.type) }
}

class Truck extends Transport {
    constructor() {
        super('truck')
    }

    deliver() { console.log('Deliver by land:::::', this.type) }
}

class Ship extends Transport {
    constructor() {
        super('ship')
    }

    deliver() { console.log('Deliver by sea:::::', this.type) }
}

const truck = new Truck()
truck.deliver()
const ship = new Ship()
ship.deliver()
