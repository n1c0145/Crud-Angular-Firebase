import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent } from '../app/body/landing/landing.component';
import { BlogsComponent } from "./crudblog/blogs/blogs.component";
import {BlogComponent } from "./crudblog/blog/blog.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: LandingComponent
  },
  {
    path: 'todos_blogs',
component: BlogsComponent
  },
  {
    path: 'blog_individual/:id',
component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
