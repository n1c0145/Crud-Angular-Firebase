import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Blogeduardo } from "../modelos/blogeduardo";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogCollection: AngularFirestoreCollection<Blogeduardo>;
  private listaBlogs: Observable<Blogeduardo[]>;
  private unBlog: Observable<Blogeduardo>;
  private paciBlog: AngularFirestoreDocument<Blogeduardo>;



  constructor(private db: AngularFirestore) {
this.blogCollection=this.db.collection<Blogeduardo>('blogs');


   }

   crearBlog(blog: Blogeduardo){
    console.log("Blog agregado"+blog);
    this.blogCollection.add(blog);
   }

   leerBlogs(){
    this.listaBlogs = this.blogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const contenido = a.payload.doc.data() as Blogeduardo;
        const id = a.payload.doc.id;
        return { id, ...contenido };
      }))
    );
    return this.listaBlogs;

   }

   leerUnBlog(id: string): Observable<Blogeduardo[]> {
    const blogdocuements = this.db.collection<Blogeduardo[]>('blogs');
    return blogdocuements.snapshotChanges()
      .pipe(
        map(changes => changes.map(({ payload: { doc } }) => {
          const data = doc.data();
          const id = doc.id
          return { id, ...data };
        })),
        map((pacientes) => pacientes.find(doc => doc.id === id)))

  }



  cambiarBlog(blog: Blogeduardo) {
    this.paciBlog = this.db.doc(`blogs/${blog.id}`);
    this.paciBlog.update(blog);
  }

  borrarBlog(blog: Blogeduardo) {
    this.paciBlog = this.db.doc(`blogs/${blog.id}`);
    this.paciBlog.delete();
  }






}
