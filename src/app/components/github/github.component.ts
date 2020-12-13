import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  githubRepositoriesFilter: GithubRepo[] = [];

  githubSearch: FormControl = new FormControl('');

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getPublicRepositoriesByUser();
    this.validateSearhInput();
  }

  validateSearhInput(): void {
    this.githubSearch.valueChanges.subscribe((value) => {
      this.searchRepositoryByName(value);
    });
  }

  searchRepositoryByName(value: string): void {
    if (value && value !== '') {
      this.githubRepositories = this.githubRepositoriesFilter.filter((repo) => repo.name.match(value));
    } else {
      this.githubRepositories = this.githubRepositoriesFilter;
    }
  }

  getPublicRepositoriesByUser(): void {
    this.githubService.getPublicRepositoriesByUser(USER)
    .pipe(
      delay(3000)
    )
    .subscribe(
      (res) => {
        this.githubRepositories = [...res];
        this.githubRepositoriesFilter = [...res];
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
