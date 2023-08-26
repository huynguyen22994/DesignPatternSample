// Linear Search
// input: [2,3,4,6,3,5,7,8,234,454,6]
// target: 8;
// O(n)
function linearSearch(arr, target) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            result.push(i);
        }
    }
    return result;
}
console.log(linearSearch([2,3,4,6,3,5,7,8,234,454,6], 8));

// Binary Search -- The array must be sorted
// input: [1,2,4,5,7,8,9,12,15,16];
// target: 4;
// O(1)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1; //9

    while(left <= right) {
        let mid = Math.floor((right + left)/2);
        if(arr[mid] == target) {
           return mid;
        } else if(arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,4,5,7,8,9,12,14,16], 8))


function serachSecondMax(arr) {
    let hash = new Map();
    hash.set('max', arr[0]); hash.set('secondmax', arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(hash.get('max') < arr[i]) {
            hash.set('secondmax', hash.get('max'));
            hash.set('max', arr[i]);
        } else if(hash.get('secondmax') < arr[i]) {
            hash.set('secondmax', arr[i]);
        }
    }
    return hash.get('secondmax');
}

console.log(serachSecondMax([1,2,4,5,7,8,9,12,14,16]))


function serachSecondMaxv2(arr) {
    let hash = new Map();
    hash.set('max', arr[0]); hash.set('secondmax', arr[0]);
    let i = 0;
    while(i < arr.length) {
        if(hash.get('max') < arr[i]) {
            hash.set('secondmax', hash.get('max'));
            hash.set('max', arr[i]);
        } else if(hash.get('secondmax') < arr[i]) {
            hash.set('secondmax', arr[i]);
        }
        i++;
    }
    return hash.get('secondmax');
}

console.log(serachSecondMaxv2([1,2,4,5,7,8,9,12,14,16]))