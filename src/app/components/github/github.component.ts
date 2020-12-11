import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { USER } from 'src/app/shared/global.constants';
import { GithubRepo } from 'src/app/shared/models/github.model';
import { GithubService } from 'src/app/shared/services/github.service';
import { onOpenWebsiteByURL } from 'src/app/shared/utils';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  githubRepositories: GithubRepo[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getPublicRepositoriesByUser();
  }

  getPublicRepositoriesByUser(): void {
    this.githubService.getPublicRepositoriesByUser(USER)
    .pipe(
      // delay(6000)
    )
    .subscribe(
      (res) => {
        this.githubRepositories = [...res];
        console.log(this.githubRepositories);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onOpenWebsite(url: string): void {
    onOpenWebsiteByURL(url);
  }

}
