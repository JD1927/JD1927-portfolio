import { Component, OnInit } from '@angular/core';
import { REPO_TASK_MANAGMENT, URL_TASK_MANAGMENT } from 'src/app/shared/global.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public URL_TASK_MANAGMENT: string = URL_TASK_MANAGMENT;
  public REPO_TASK_MANAGMENT: string = REPO_TASK_MANAGMENT;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenWebsite(url: string): void {
    window.open(url);
  }

}
