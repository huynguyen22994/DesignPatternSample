// Selection Sort - Thuật toán sắp xếp chọn trực tiếp
// input: [2,3,3,5,7,8,234,454,6,4,6]
// O(n^2)
function sectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sectionSort([2,3,3,5,7,8,234,454,6,4,6]))

// Insertion Sort - Thuật toán sắp xếp chèn trực tiếp
// input: [2,3,3,5,7,8,234,454,6,4,6]
// O(n)
function insertionSort(arr) {
    let pos, x;
    for(let i = 1; i < arr.length; i++) {
        pos = i - 1;
        x = arr[i];
        while(pos >= 0 && arr[pos] > x) {
            arr[pos + 1] = arr[pos];
            pos--; 
        }
        arr[pos + 1] = x;
    }
    return arr;
}
console.log(insertionSort([2,3,3,5,7,8,234,454,6,4,6]));

// Binary Insertion Sort - Thuật toán chèn trực tiếp dựa trên tìm kiếm nhị phần
// input: [2,3,3,5,7,8,234,454,6,4,6]
// O(n)

// Interchange Sort - Thuật toán sắp xếp đỗi chổ trực tiếp
// input: [2,3,3,5,7,8,234,454,6,4,6]
// O(n^2)
// Gần giống Selection sort

// Bubble sort - Thuật toán sắp xếp nổi bọt
// input: [2,3,3,5,7,8,234,454,6,4,6]
// O(n^2)
function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = arr.length - 1; j > i; j--) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sectionSort([2,3,3,5,7,8,234,454,6,4,6]))

// Shaker sort
// Quick Sort 
// Merge Sort
// Heap Sort