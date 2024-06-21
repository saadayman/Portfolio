import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class EducationComponent {

}
