import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent  implements OnInit{

 
  constructor(){}

  ngOnInit(){

  }

 public selectedProduct='';
 setvalue(drp:any)
 {
  this.selectedProduct=drp.target.value;
 }



  title ='Data';
  data=[
    {
      name:'smita',
      age:25,
      email:'smita@12'
    },
    {
      name:'sham',
      age:20,
      email:'sham@23'
    },
    {
      name:'pihu',
      age:23,
      email:'pihu@34'
    }

  ]

  

  mypro:boolean=false;
  mystyle:string="15px"
  isActive:boolean=false
  mltclasses = {
    class1:true,
    class2:false,
    class3:true
  }

  mltStyle ={
    'background': 'red',
    'border': '10px solid green'
  }


  userId: number = 10;
  userStatus: string = 'Offline';

  getUserStatus(){
    return this.userStatus;
  }
 
  dynName:string="smita";

   myMethod(){
    return "My name is"+ this.dynName
   }

  enable:boolean=true;

   appStatus:boolean=true;
   Statuse1 ="Online";
   Statuse2 ="Offline";

   msg:string ="";
   OnAddCart(event:any){
      this.msg = event.target.value +"Added in Cart";
   }

   onInputClick(event:any){
    console.log(event.target.value);
   }
}
