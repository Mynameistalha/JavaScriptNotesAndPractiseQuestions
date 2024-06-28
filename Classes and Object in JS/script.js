

//In jS prototype is is an object instance of class which shows the behaviour and method of objects
//having state and behavoiir
//js objects have special properties called prototype.
const students={  //how we create the object

    fullName:"Talha Khan",
    marks:89.0,
    printMarks:function()
    {
        console.log("Marks= ",this.marks);//here this use like student of mean this use as object;
    },
};
//In js object have already object in this 
// in js array is also object intrernally
// if u want to check then typeof arr
// Eg Array.push("Ahmed");
// this method come from prototype  by default

const employe={

    calcTax()
    {
        console.log("Tax rate is 10%")
    },
    // } by this methiod wo can define any function in the object
    //also by this
    calctax2:function()
    {
        console.log("Tax rate is 10%")

    },


};

const talhaKhan={
    salary:5000000,
}

//if u want to add prop[erties of diff objects in the diff object then we use this methiod]

talhaKhan.__proto__=employe//use to set a prtotype

const talhaKhan1={
    salary:5000000,
}
const talhaKhan2={
    salary:5000000,
}
const talhaKhan3={
    salary:5000000,
}
const talhaKhan4={
    salary:5000000,
    
    calcTax()
    {
        console.log("Tax rate is 10%")
    },
}
talhaKhan1.__proto__=employe
talhaKhan2.__proto__=employe
talhaKhan3.__proto__=employe
talhaKhan4.__proto__=employe

// prtotype basically is an refernce to an object

// if object and prpotype have same method tjhen object's method will be used;


// like this
const talhaKhan4={
    salary:5000000,
    
    calcTax()
    {
        console.log("Tax rate is 10%")
    },
}
//then we use the oject method instead of prototype


////// Class is a program-code template for creatiiing objects 
//  those objects will have some state and varibale and some behaviour (function ) inside in it .
  //Struct or syantax

  class MyClass
  {
    constructor()
    {

    }
    MyMethod()
    {

    }
  }

  // create any object from class

  let myobject= new MyClass();


  //Heere we make the classs

  class ToyataCar
  {

    // custom consturcctor
    constructor(brand,milage)

    {
        this.brand=brand;
        this.milage=milage;
        

        console.log("creating new object");
    }
    start()
    {
        console.log("Start");

    }
    stop()
    {
        console.log("Stop"); 
    }
    setBrand(brand)
    {
         this.brand=brand; //here this use for each individual object who calls it
    }
  }

  let Fortuner=new ToyataCar;//constructor invoke
  Fortuner.setBrand("Fortuner",10);//constructor invoke

  let Lexus=new ToyataCar;
  Lexus.setBrand("Lexus",8); 
  //Classes mostly use when we create the same template for multiple objects;



//   Now Constructor

//   automaticalyy invokes by new

// Constructor()
// {

// }
// when we craeet the new object 
// let obj=new MyClass();

// new keyword use find the constructor
// if don't finf then it crtaete the constructor automatically;
//constuctor  intialize the data



///

// Inheritance In JS

// inheritance is passing down thw prop[erties  and method of parent class to child class ]


//syantx

class parent{

}
class Child extends parent{

}

// If child  and parents have same method,then child's meth0d will be used.

// [Method Overriding];



class parent
{
    hello()
    {
    console.log("Hello");
    }

}
class Child extends parent{

    let obj= new Class();

};

class Person
{

   eat()
   {
    console.log("Hi i am going to sleep");

   }

   sleep()
   {
    console.log("I waana eat sometyhing");
   }
   work()
   {
    console.log("Solve the problem");
   }

}
class Eniginneer extends Person{//derived classs
    constructor(branch);
    super();//invoke parent class constructor;
  this.branch=branch;
    work()
   {
    console.log("Solve the problem");
   }
}

let talha=new Eniginneer();

///



   
