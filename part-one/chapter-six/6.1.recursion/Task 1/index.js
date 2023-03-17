// 1. Решение с использованием цикла 

const sumTo = (num) => {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += num - i;
  } 
  return result;
};

// 2. Решение с использованием рекурсии

const sumTo = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + sumTo(num - 1);
};

// 3. Решение с использованием арифметической прогрессии

const sumTo = (num) => {
  return num * ((num + 1) / 2);
}

console.log(sumTo(3))

