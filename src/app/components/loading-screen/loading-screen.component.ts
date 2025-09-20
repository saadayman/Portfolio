import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent implements OnInit {
  loadingProgress = 0;
  loadingText = 'Loading...';
  isVisible = true;

  ngOnInit() {
    this.startLoadingAnimation();
  }

  private startLoadingAnimation() {
    const loadingSteps = [
      { progress: 20, text: 'Initializing...' },
      { progress: 40, text: 'Loading components...' },
      { progress: 60, text: 'Preparing interface...' },
      { progress: 80, text: 'Almost ready...' },
      { progress: 100, text: 'Welcome!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        this.loadingProgress = step.progress;
        this.loadingText = step.text;
        currentStep++;
      } else {
        clearInterval(interval);
        // Wait a bit at 100% before disappearing
        // setTimeout(() => {
        //   this.isVisible = false;
        // }, 4000); // Wait 1.5 seconds at 100%
      }
    }, 800);
  }
}
