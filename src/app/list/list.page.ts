import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'laptop',
    'filing',
    'color-palette',
    'options',
    'rocket',
    'pie'
  ];
  public items: Array<{ title: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      if (i == 1) {
        this.items.push({
          title: 'Notebook',
          icon: this.icons[0]
        });
      } else if (i == 2) {
        this.items.push({
          title: 'Office',
          icon: this.icons[1]
        });
      } else if (i == 3) {
        this.items.push({
          title: 'Designing',
          icon: this.icons[2]
        });
      }  else if (i == 4) {
        this.items.push({
          title: 'Music Production',
          icon: this.icons[3]
        });
      } else if (i == 5) {
        this.items.push({
          title: 'Gaming',
          icon: this.icons[4]
        });
      }  else if (i == 6) {
        this.items.push({
          title: 'Capacity',
          icon: this.icons[5]
        });
      } 
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
