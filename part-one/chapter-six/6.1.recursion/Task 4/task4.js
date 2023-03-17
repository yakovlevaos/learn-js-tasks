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

const printList = (list) => {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

console.log(printList(list))

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

const printList = (list) = {
  let values = list;
  while (values) {
    console.log(values.value);
    values = values.next;
  }

}

console.log(printList(list))


