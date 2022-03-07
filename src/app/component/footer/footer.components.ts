import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
 
   }

  ngOnInit(): void {

    const subir = document.getElementById("btn")

    subir.addEventListener("click", function() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'  
       })
     })
    
    
    
    
  }
}