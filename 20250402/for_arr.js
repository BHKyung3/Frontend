let arr = ["banana", "apple", "orange"];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log("--------------");

let obj = {
    kor: 80, eng: 90, math: 77
};

for(let i in obj)
    console.log(i + " " + obj[i]);