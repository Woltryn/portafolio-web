import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


const scroll = document.getElementById("btn-footer":strict).addEventListener('click',scrollToTop);
function scrollToTop() {
  window.scrollTo(){
    top: 0
    behavior: 'smooth'
  }
}
  }






}
