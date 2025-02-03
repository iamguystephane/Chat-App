// binary to decimal
const binaryNumber = [1, 1, 0, 0, 1, 1, 0, 0, 0];

const binToDec = (binNumber) => {
  let decNumber = 0;
  const binNumberCpy = [...binNumber];
  binNumberCpy.reverse().forEach((bit, index) => {
    decNumber += bit * Math.pow(2, index);
  });
  return decNumber;
};

const decNumber = binToDec(binaryNumber);
console.log(decNumber);

// decimal to binary
const decimalNumber = 300;
const decToBin = (decNumber) => {
  let binaryArray = [];
  while (decNumber > 0) {
    const remainder = decNumber % 2;
    binaryArray.push(remainder);
    decNumber = Math.floor(decNumber / 2);
  }
  console.log("All Done");
  return binaryArray.reverse().join("");
};

const bin = decToBin(decimalNumber);

// hex to decimal
const hex = [1, 4, "A", "B", "F"];

const hexToDec = (hexNumber) => {
  const hexMap = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  return hexNumber.reverse().reduce((decimal, hexDigit, index) => {
    const value = hexMap[hexDigit] !== undefined ? hexMap[hexDigit] : hexDigit;
    return decimal + value * Math.pow(16, index);
  }, 0);
};

const dec = hexToDec(hex);
