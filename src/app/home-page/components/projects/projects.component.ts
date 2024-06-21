import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ProjectsComponent {
  constructor(public translateService:TranslateService){
    console.log(this.translateService.currentLang)
  }

  ngOnInit(){

  }


}
