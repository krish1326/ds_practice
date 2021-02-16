let state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

// console.log(state.includes("Puducherry"));
// console.log(state.find((element) => element == "Puducherry"));
let arr = [23, 67, 87, 98, 0, -1, 19];

function getKLargestNumbers(array, k) {
  return array
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, k);
}

console.log(getKLargestNumbers(arr, 3));

// linear search
function isNumberPresent(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) return i;
  }
  return -1;
}

if (isNumberPresent([1, 2, 78, 87, 98, 18], 18) !== -1) {
  console.log("number found");
} else {
  console.log("number not found!");
}

// binary search : applicable for sorted array;

function binarySearch(array, number) {
  let left = 0;
  let right = array.length - 1;
  let index = Math.floor((left + right) / 2);
  while (array[index] != number && left <= right) {
    if (array[index] > number) {
      right = index - 1;
    } else left = index + 1;
    index = Math.floor((left + right) * 0.5);
  }

  return array[index] === number ? index : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15], 13));

function squareRoot(number) {
let left = 0;
let right = number;
let index = (left+right)/2;
let count = 0;
while (Math.abs(index*index-number) >= 0.01 &&left<right) {
        count++;
        if(index*index> number){
            right = index ;
        }    
        else{
            left = index ;
        }
        index = (left+right)/2;
    }
    console.log(count);
    return index;
}
console.log(squareRoot(100000000));

function singlyLinkedList(value){
    this.value = value;
    this.next = null;
}

singlyLinkedList.prototype.addNext = function (value){
    if(!this.next){
        this.next = new singlyLinkedList(value);
    }
    else {
        let self = this;
        while(self.next){
            self = self.next;
        }
        self.next = new singlyLinkedList(value);
    }
}
singlyLinkedList.prototype.removeNode = function (value){
    let self = this;
    if(self.value == value){
        if(self.next){
            self = self.next;
            return self;
        }
        else{
            self = {};
        }
    } 
}
var singlyLink = new singlyLinkedList(10);
singlyLink.addNext(100);
singlyLink.addNext(29);
singlyLink.addNext(200);
singlyLink.addNext(1000);
singlyLink = singlyLink.removeNode(10);
console.log(singlyLink);

// var variable = 10;
// (function(){
  
//   console.log(variable);
//   let variable = 18;
// })()

