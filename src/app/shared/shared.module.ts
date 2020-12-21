import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { GithubService } from './services/github.service';
import { GithubSkeletonComponent } from './components/github-skeleton/github-skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    CardComponent,
    GithubSkeletonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    CardComponent,
    GithubSkeletonComponent
  ],
  providers: [
    GithubService
  ]
})
export class SharedModule { }
