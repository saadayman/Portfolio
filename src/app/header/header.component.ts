import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangDirectionService } from '../globalServices/lang-direction.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(public translateService:TranslateService,public langDirectionService:LangDirectionService)
  {}
  switchLanguage(lang:string) {

    this.translateService.use(lang);
    this.langDirectionService.setDirection =lang
    // localStorage.setItem('current-lang',lang)
  }
}
