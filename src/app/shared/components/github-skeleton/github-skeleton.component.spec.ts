import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSkeletonComponent } from './github-skeleton.component';

describe('GithubSkeletonComponent', () => {
  let component: GithubSkeletonComponent;
  let fixture: ComponentFixture<GithubSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
