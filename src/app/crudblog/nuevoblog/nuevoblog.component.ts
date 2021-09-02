import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Blogeduardo } from "../../modelos/blogeduardo";
import { BlogService } from "../../servicios/blog.service";
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-nuevoblog',
  templateUrl: './nuevoblog.component.html',
  styleUrls: ['./nuevoblog.component.scss']
})


export class NuevoblogComponent implements OnInit {


  
public nuevo:Blogeduardo={
  titulo:"",
  autor:"",
  fecha:"",
  contenido:"",

  
}

  constructor(private serv:BlogService ,private _snackBar: MatSnackBar) {
    
   }

  ngOnInit(): void {
  }

  

submit(formulario:NgForm){
  if(formulario.valid){

    this.serv.crearBlog(this.nuevo)
    formulario.reset();
  }else{
console.log("err");


  }
  
 
}


openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 4000,
    });
   }
}




