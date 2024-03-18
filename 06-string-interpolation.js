const company="Delloite";
const name="Tom";
const sid=12345;

// My name is Tom, I work for Delloite, my SID is 12345

const line="My name is  "+name+" , I work for  "+company+", my SID is "+sid;
console.log(line)

// String Interpolation

const lineInterpolated=`My name is ${name}, I work for ${company}, my SID is ${sid}`;
console.log(lineInterpolated)