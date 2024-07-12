import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LangDirectionService } from '../global/services/lang-direction.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translateService:TranslateService,public langDirectionService:LangDirectionService)
  {}
  switchLanguage(lang:string) {
    this.translateService.use(lang);
    this.langDirectionService.setDirection = lang
  }
}
