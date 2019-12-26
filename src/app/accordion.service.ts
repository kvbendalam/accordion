import { Injectable, EventEmitter } from '@angular/core';

const accordionEntries: any =
  [
    {
      title: 'First',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: 'Second',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Third",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  onEntryClick = new EventEmitter();
  entries: any[] = accordionEntries;
  constructor() { }

  collapseAllEntries() {
    this.onEntryClick.emit();
  }
}
