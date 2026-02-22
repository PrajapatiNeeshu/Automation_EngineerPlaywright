
//testUser2();

export class testUser4 {
    constructor( a = null ) { 

    }
      testUser3() { 
    let a = 10;     
    let b = 20;
    let sum = a + b;    

console.log("This is testUser3function");
}


   testUser2() { 
    let a = 10;
    let b = 20;
    let sum = a + b;    

console.log("This is testUser2 function");
   }
}

let user = new testUser4();
user.testUser2()
user.testUser3()