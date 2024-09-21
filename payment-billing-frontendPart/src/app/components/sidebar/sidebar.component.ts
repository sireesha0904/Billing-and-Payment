import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  transactions = [
    { id: '123', amount: 100, status: 'Success' },
    { id: '124', amount: 200, status: 'Failed' },
  ];
}
