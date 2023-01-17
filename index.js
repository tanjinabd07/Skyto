// class Person{
//     constructor(fname,lname,birth){
//         this.fName= fname;
//         this.lName=lname;
//         this.dob=birth;
//     } 

//     calculateAge(){
//         let birthDay= new Date(this.dob);
//         let diff= Date.now()-birthDay.getTime;
//         let ageDate= new Date(diff);
//         return Math.abs(ageDate.getFullyear()-1970);
//     }
// }

// let person1= new Person("Araf", "bhuyan", "1-11-2000");
// let person2= new Person(n","Tanjina","alam","12-12-1995");
// let person3= new Person("rinku", "bhuya "11-11-1998");
// let person4= new Person("shakil","bhuyan","1-11-1994");
// console.log(person1 .calculateAge());
// console.log(person2.calculateAge());
// console.log(person3 .calculateAge());
// console.log(person4 .calculateAge());

// class & sub class practice

// class Person{
//     constructor(fName, lName , birth){
//         this.firstname=fName;
//         this.lastName=lName;
//         this.dob=birth;
//     }
// }
// let person1= new Person("araf", "bhuyan","11-10-19198");
// let person2= new Person("Tanjina","alam","12-12-1995");
// let person3= new Person("rinku", "bhuya","11-11-1998");
// let person4= new Person("shakil","bhuyan","1-11-1994");


// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4 );

// class Students extends Person{
//         constructor(fName, lName , birth, mob ,member){
//             super(fName,lName,birth);
//            this.mobile= mob;
//            this.member= member;
//         }

//         fullName(){
//         console.log(this.firstname,this.lastName );
//         }
//     }        
    
// let student1= new Students( "Rahim","karim","01671990707", "library Member");
// console.log(student1.fullName());


// document.getElementById("title").style.background="black";

// document.getElementById("title").style.color="#fff";
// document.getElementById("title").style.padding="20px";
// document.getElementById("title").style.padding="20px";
// document.getElementById("title").style.display="block";
// document.getElementById("title").innerText=" Change Title";
// document.getElementById("title").innerHTML=" <i>change Title </i>";

 


 

 val =document.querySelector("ul li");
 val.style.background="red";
 val.style.padding="10px";
 val.style.color="green";