import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-ui-lib',
  template: `
    <p>
      my-ui-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyUiLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
