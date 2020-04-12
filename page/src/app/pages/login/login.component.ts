import { Component, OnInit } from '@angular/core';
import { labels } from '../../layouts/clean-structure/module-properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  moduleLabels = labels;

  constructor() { }

  ngOnInit(): void {
  }

}
