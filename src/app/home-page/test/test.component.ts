import { Component } from '@angular/core';
import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgbScrollSpyModule,NgbDropdownModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
