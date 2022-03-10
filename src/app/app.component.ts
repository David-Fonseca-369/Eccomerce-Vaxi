import { Component, OnInit } from '@angular/core';


import{AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-angular-app';

  constructor(private fs: AngularFirestore){

  }

  ngOnInit(){
      this.fs.collection('test').snapshotChanges().subscribe( personas => {//test es el nombre de la colección en firebase 
      //obtenemos la data que devuelve de la colección
      //snapshot changes toma una captura de los datos que consulta al momento y los devuelve 
      console.log(personas.map(x => x.payload.doc.data())); //map hace el recorrido de la  y extraiga la data de la colección


      } 
        


      )
  }
}


