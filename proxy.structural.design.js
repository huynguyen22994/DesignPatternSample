// Proxy Design Pattern có thể hiếu là một object1 ủy quyền cho 1 object2 nhân và xử lý yêu cầu của object3
// Patten này xuất hiện trong các ứng dụng bảo mật, hoặc ứng có lượng truy cập cao và cần lớp điều hướng ...

class Boss {
    reciveRequest(request) {
        console.log(`Boss approve: ${request}`);
    }
}

class Secretary {
    constructor () {
        this.boss = new Boss();
    }

    transferRequest(request) {
        this.boss.reciveRequest(request);
    }
}

class Staff {
    constructor(request) {
        this.request = request;
    }

    applyRequest(target) {
        target.transferRequest(this.request);
    }
}

const staff = new Staff('offer 2000$');
staff.applyRequest(new Secretary());