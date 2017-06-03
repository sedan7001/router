import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  click = {
    navigate: () => {
      this.router.navigateByUrl("third/fourth");
    }
  }

}
