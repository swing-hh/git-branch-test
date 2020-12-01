let yingyu = "English";
let shuxue = "Math";
let yuwen = "Chinese1";

let subjectArr = [yingyu, shuxue, yuwen];

speaking(subjectArr);

function speaking(arr) {
  arr.forEach((item) => {
    console.log("I lick " + item);
  });
}
