const num1 = 100;
const num2 = 101;

const num3 = numAdd(num1, num2);
const num4 = numAdd(num3, num2);

const obj1 = {
  name: "yaobai",
  age: 18,
};
obj1.prototype.getName = function () {
  return this.name;
};
obj1.prototype.getAge = function () {
  return this.getAge;
};

let taskArr = [
  {
    name: 'siwei',
    main: './siwei.js'
  },
  {
    name: 'yingyu',
    main: './yingyu.js'
  },
  {
    name: 'yuwen',
    main: './yuwen.js'
  },
  {
    name: 'taskC',
    main: './taskC.js'
  },
  {
    name: 'taskB',
    main: './taskB.js'
  }
]

showUrl(taskArr)

function showUrl(arr) {
  arr.forEach((item)=>{
    console.log('http://localhost:8080/' + item.name + '.html')
  })
}

function numAdd(num1, num2) {
  return num1 + num2;
}
