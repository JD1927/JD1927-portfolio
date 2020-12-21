import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-skeleton',
  templateUrl: './github-skeleton.component.html',
  styleUrls: ['./github-skeleton.component.scss']
})
export class GithubSkeletonComponent implements OnInit {

  iconTheme = {
    width: '3rem',
    height: '3rem'
  };
  textTheme = {
    height: '2rem'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
