import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro-component',
  standalone: true,
  imports: [NgOptimizedImage,TranslateModule,NgbTooltipModule],
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
