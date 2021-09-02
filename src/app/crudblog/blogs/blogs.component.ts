import { Component, OnInit } from '@angular/core';
import { Blogeduardo } from "../../modelos/blogeduardo";
import { BlogService } from "../../servicios/blog.service";
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs:Blogeduardo[];

  constructor(private servicio:BlogService) {
    this.servicio.leerBlogs().subscribe(subscribirse=>{
      this.blogs=subscribirse;
    })

   }

  ngOnInit(): void {
  }

}
