import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangDirectionService } from '../global/services/lang-direction.service';
import { SlideTogglerComponent } from '../global/components/slide-toggler/slide-toggler.component';
import { LogoComponent } from '../global/components/logo/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage,TranslateModule,SlideTogglerComponent,LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(public translateService:TranslateService,public langDirectionService:LangDirectionService)
  {}
  switchLanguage(lang:boolean) {
    const language =  lang?'en':'ar'
    this.translateService.use(language);
    this.langDirectionService.setDirection =language
    // localStorage.setItem('current-lang',lang)
  }
}
