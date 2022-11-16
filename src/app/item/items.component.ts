import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;
  myGroupingFunc: any;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.myGroupingFunc = (item: Item) => {
      return item.role;
    };
  }
}
