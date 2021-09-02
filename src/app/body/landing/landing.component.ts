import { Component, OnInit } from '@angular/core';
import { Blogeduardo } from "../../modelos/blogeduardo";
import { BlogService } from "../../servicios/blog.service";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

blogs:Blogeduardo[];

  constructor(private servicio:BlogService) {
this.servicio.leerBlogs().subscribe(subscribirse=>{
  this.blogs=subscribirse;
})

   }

  ngOnInit(): void {
  }

}
