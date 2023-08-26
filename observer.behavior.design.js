// (người quan sát) Mẫu thiết kế dùng giải quyết vấn đề những Object liên quan hoặc quan tâm đến đến vấn đề gì đó, và từ dó thực hiện hành vi thì dùng mẫu này
// Ví dụ cho mẫu về chờ đèn xanh đèn đỏ

class Observer {
    constructor(name) {
        this.name = name;
    }

    updateMoving(location) {
        this.driveToLocation(location);
    }

    driveToLocation(location) {
        console.log(this.name + '::::drive to :::::' + JSON.stringify(location));
    }
}

class StrafficLight {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    openDrive(location) {
        this.observers.forEach(obs => {
            obs.updateMoving(location);
        })
    }
}

const per1 = new Observer("Huy");
const per2 = new Observer("Yen");

const strafficLight = new StrafficLight();

strafficLight.addObserver(per1);
strafficLight.addObserver(per2);

strafficLight.openDrive({long: 123, lat: 321});


// Khái nệm PUSH và PULL cho Observer Patten. Kỹ thuật push/pull là kiến trúc dùng cho hệ thống lớn