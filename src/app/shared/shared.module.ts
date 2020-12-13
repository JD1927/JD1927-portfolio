import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CardComponent
  ],
  providers: [
    GithubService
  ]
})
export class SharedModule { }
