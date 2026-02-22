const person = {
name : 'Rahul',
age : 25,
city : 'Delhi',
job : 'Software Engineer',
isMarried : false,
greet : function() {
console.log('Hello, my name is ' + this.name + '. I am a ' + this.job + ' from ' + this.city + '.');
}
};
    
console.log(person.name); // Output: Rahul
console.log(person.age); // Output: 25
console.log(person.city); // Output: Delhi
console.log(person.job); // Output: Software Engineer
console.log(person.isMarried); // Output: false

person.greet(); // Output: Hello, my name is Rahul. I am a Software Engineer from Delhi.