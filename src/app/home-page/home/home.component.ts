import { ChangeDetectionStrategy, Component, OnInit, afterNextRender } from '@angular/core';
import { IntroComponent } from '../components/intro-component/intro-component.component';
import { ExperienceSectionComponent } from '../components/experience-section/experience-section.component';
import { EducationComponent } from '../components/education/education.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { TranslateService } from '@ngx-translate/core';
import { LangDirectionService } from '../../globalServices/lang-direction.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent,ExperienceSectionComponent,EducationComponent,SkillsComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
  constructor(public translateService:TranslateService,public langDirectionService:LangDirectionService){
    afterNextRender(()=>{
      console.log(this.langDirectionService.language_direction)

    })
  }
ngOnInit(){
  console.log(this.langDirectionService.language_direction)
}
}
