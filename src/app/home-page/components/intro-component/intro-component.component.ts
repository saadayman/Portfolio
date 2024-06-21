import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro-component',
  standalone: true,
  imports: [NgOptimizedImage,TranslateModule],
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class IntroComponent {
  constructor(
    public translateService:TranslateService
  ){}
  ngOnInit(){

  }

}
