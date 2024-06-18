import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-component',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './intro-component.component.html',
  styleUrl: './intro-component.component.scss'
})
export class IntroComponent {

}
