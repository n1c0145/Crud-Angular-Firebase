import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router , Params } from "@angular/router";
import { BlogService } from "../../servicios/blog.service";
import { Blogeduardo } from './../../modelos/blogeduardo';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

id:string;
blogs:any;
editar:boolean=false;

  constructor(private ruta:ActivatedRoute , private ruta2:Router , 
    private serv:BlogService
    ) {
this.ruta.params.subscribe((params:Params)=>{
  this.id=params.id;
});
this.serv.leerUnBlog(this.id).subscribe(suscrib=> {  
  this.blogs=suscrib;
  console.log(this.blogs);
});

 
   }

  ngOnInit(): void {
  }

cambiareditar(){
  this.editar=!this.editar;
}

cambiar(form:NgForm){
let eduardo:Blogeduardo={
titulo:form.value.titulo,
autor:form.value.autor,
fecha:form.value.fecha,
contenido:form.value.contenido,
id:this.id,
}
this.serv.cambiarBlog(eduardo)
this.ruta2.navigateByUrl("/todos_blogs")


}


borrar(){
this.serv.borrarBlog(this.blogs);
this.ruta2.navigateByUrl("/todos_blogs")


}


}
