import { Component } from '@angular/core';
import { REPO_POKEDEX, REPO_TASK_MANAGMENT, URL_POKEDEX, URL_TASK_MANAGMENT } from 'src/app/shared/global.constants';
import { onOpenWebsiteByURL } from 'src/app/shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public URL_TASK_MANAGMENT: string = URL_TASK_MANAGMENT;
  public REPO_TASK_MANAGMENT: string = REPO_TASK_MANAGMENT;
  public URL_POKEDEX: string = URL_POKEDEX;
  public REPO_POKEDEX: string = REPO_POKEDEX;

  constructor() { }

  onOpenWebsite(url: string): void {
    onOpenWebsiteByURL(url);
  }

}
