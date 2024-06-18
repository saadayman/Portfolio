import { Component } from '@angular/core';
import { IntroComponent } from '../components/intro-component/intro-component.component';
import { ExperienceSectionComponent } from '../components/experience-section/experience-section.component';
import { EducationComponent } from '../components/education/education.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent,ExperienceSectionComponent,EducationComponent,SkillsComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
