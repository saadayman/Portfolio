import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ExperienceSectionComponent {

}
