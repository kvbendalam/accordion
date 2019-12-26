import { Component, OnInit, Input } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'app-acc-item',
  templateUrl: './acc-item.component.html',
  styleUrls: ['./acc-item.component.scss']
})
export class AccItemComponent implements OnInit {

  @Input() entry: any;
  uncollapsed = false;
  constructor(private service: AccordionService) { }

  ngOnInit() {
    this.service.onEntryClick.subscribe(() => {
      this.uncollapsed = false;
    });
  }

  onBtnClick() {
    this.service.collapseAllEntries();
    this.uncollapsed = true;
  }

}
