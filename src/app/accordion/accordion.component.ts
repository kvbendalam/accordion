import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {


  @Input() data;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    document.addEventListener("DOMContentLoaded", function (event) {

      var acc = document.getElementsByClassName("accordion");
      var panel = document.getElementsByClassName('panel');

      for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          var setClasses = !this.classList.contains('active');
          setClass(acc, 'active', 'remove');
          setClass(panel, 'show', 'remove');

          if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
          }
        })
      }

      function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
        }
      }

    });

  }
}
