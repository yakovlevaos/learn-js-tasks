// 1. Решение с рекурсией

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printReverseList = (list) => {
  let result = [];
  let values = list;

  while (values) {
    result.push(values.value);
    values = values.next;
  }

  for (let i = result.length - 1; i >= 0; i -= 1) {
    console.log(result[i]);
  }
}


console.log(printReverseList(list));

// 2. Решение с циклом

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printReverseList = (list) => {
  let result = [];
  let values = list;

  while (values) {
    result.push(values.value);
    values = values.next;
  }

  for (let i = result.length - 1; i >= 0; i -= 1) {
    console.log(result[i]);
  }
}

console.log(printReverseList(list));