import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: string;
  dates: string;
  title: string;
  company: string;
  location: string;
  icon: string;
  companyIcon: string;
  points: string[];
  isCurrent?: boolean;
  isActive?: boolean;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ExperienceSectionComponent {
  experiences: Experience[] = [
    {
      id: 'several-brand',
      dates: 'EXPERIENCE.SEVERAL_BRAND.DATES',
      title: 'EXPERIENCE.SEVERAL_BRAND.TITLE',
      company: 'EXPERIENCE.SEVERAL_BRAND.COMPANY',
      location: 'Delaware',
      icon: 'fa-solid fa-laptop fa-bounce',
      companyIcon: 'fa-solid fa-building',
      points: [
        'EXPERIENCE.SEVERAL_BRAND.POINT1',
        'EXPERIENCE.SEVERAL_BRAND.POINT2',
        'EXPERIENCE.SEVERAL_BRAND.POINT3'
      ],
      isCurrent: true,
      isActive: true,
    },
    {
      id: 'nixpend',
      dates: 'EXPERIENCE.NIXPEND.DATES',
      title: 'EXPERIENCE.NIXPEND.TITLE',
      company: 'EXPERIENCE.NIXPEND.COMPANY',
      location: 'Jordan',
      icon: 'fa-solid fa-laptop fa-bounce',
      companyIcon: 'fa-solid fa-building',
      points: [
        'EXPERIENCE.NIXPEND.POINT1',
        'EXPERIENCE.NIXPEND.POINT2',
        'EXPERIENCE.NIXPEND.POINT3'
      ],
      isActive: true,
    },
    {
      id: 'eureka',
      dates: 'EXPERIENCE.EUREKA.DATES',
      title: 'EXPERIENCE.EUREKA.TITLE',
      company: 'EXPERIENCE.EUREKA.COMPANY',
      location: 'Jordan',
      icon: 'fa-solid fa-person-chalkboard fa-bounce',
      companyIcon: 'fa-solid fa-school',
      points: [
        'EXPERIENCE.EUREKA.POINT1',
        'EXPERIENCE.EUREKA.POINT2',
        'EXPERIENCE.EUREKA.POINT3',
        'EXPERIENCE.EUREKA.POINT4',
        'EXPERIENCE.EUREKA.POINT5',
        'EXPERIENCE.EUREKA.POINT6',
        'EXPERIENCE.EUREKA.POINT7'
      ],
      isActive: true,
    }
  ].filter(experience => experience.isActive) ;
}
