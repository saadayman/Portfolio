import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {CdkDrag, CdkDragDrop, CdkDragPreview, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule,CommonModule,CdkDropList,  
    CdkDragPreview,
    CdkDropList,
    CdkDragPreview,
    CdkDrag,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class SkillsComponent {
  // timelineItems = [
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: '../../../../assets/imgs/express.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', position: 'left', invert: true },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', position: 'left' },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg', position: 'right' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', position: 'left', invert: true },
  //   { aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg', position: '' },
  //   { aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg', position: 'left' }
  // ];
  timelineItems = [
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: '../../../../assets/imgs/express.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', position: 'left', invert: true },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', position: 'left' },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg', position: 'right' },
    { type: 'middle' },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', position: 'left', invert: true },
    { type: 'component', aos: 'fade-up-right', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg', position: '' },
    { type: 'middle', bottom: true },
    { type: 'component', aos: 'fade-up-left', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg', position: 'left' }
  ];

}
