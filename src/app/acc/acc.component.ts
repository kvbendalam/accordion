import { Component, OnInit } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {

  entries: any[];
  constructor(private service: AccordionService) { }

  ngOnInit() {
    this.entries = this.service.entries;
  }

  onBtnClick() {
    this.service.collapseAllEntries();
  }

}
