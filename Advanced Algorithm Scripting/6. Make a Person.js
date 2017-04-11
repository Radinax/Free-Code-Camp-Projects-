/*
Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

SOLUTION
*/

var Person = function(firstAndLast) {
  var name;
  var lastname;
  var temp;
  
  //From what I understand this exercise wants us to use a function inside a function to manipulate the object constructor
  //With "this" we add new methods
  this.getFirstName=function(){
    return name;
  };
  this.getLastName=function(){
    return lastname;
  };
  this.getFullName=function(){
    return name+' '+lastname;
  };
  //Going to do the same with "set" but using the values obtained from the "get"
  this.setFirstName=function(first){
    name=first;
  };
  this.setLastName=function(last){
    lastname=last;
  };
  //I need to define this variables inside this function so it updates properly.
  this.setFullName=function(firstAndLast){
    temp=firstAndLast.split(/\s/); //Going to seperate the names into two arrays
    name=temp[0];
    lastname=temp[1];
    firstAndLast=temp;
  };
  //Finally when a new person is created we call this function so it updates properly.
  this.setFullName(firstAndLast);
  
};

var bob = new Person('Bob Ross');
bob.getFullName();
