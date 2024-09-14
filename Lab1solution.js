// Name : Drasti Parikh 
// Student Id : 101419828

// Exercise 1

function CapitalLetter(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  }
  
  console.log(CapitalLetter("the quick brown fox."))

// Exercise 2

  function max(a,b,c){
    return Math.max(a,b,c);
  }

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

//Exercise 3

function right(str) {
    if (str.length >= 3) {
      let stringlast = str.slice(-3); 
      let stringfirst = str.slice(0, -3);
      return stringlast + stringfirst;
    } else {
      return "String length must be at least 3!";
    }
  }

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


//Exercise 4

function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle === 90) {
      return "Right angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else {
      return "Angle > 180";
    }
  }

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))



