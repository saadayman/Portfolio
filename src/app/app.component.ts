import { Component, PLATFORM_ID, afterNextRender, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './home-page/test/test.component';
import { HeaderComponent } from './header/header.component';
import * as AOS from 'aos';
import { AppShellComponent } from './app-shell/app-shell.component';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LangDirectionService } from './global/services/lang-direction.service';
import { FooterComponent } from './footer/footer.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import Clarity from '@microsoft/clarity';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, HeaderComponent, AppShellComponent, FooterComponent, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = true;
  constructor(public title: Title, public translateService: TranslateService, public langDirectionService: LangDirectionService) {
   const projectId = "skikxr7y99"

    // Set title immediately
    this.title.setTitle('Saed Ayman');

    afterNextRender(() => {
      // Initialize language after render to avoid SSR issues
      this.langDirectionService.initializeLanguage();
      Clarity.init(projectId);

      // Initialize AOS after render
      AOS.init(); // AOS - 2
      console.log('Current language:', this.langDirectionService.currentLanguage);
      console.log('Language direction:', this.langDirectionService.language_direction);

      // AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    });
  }

  ngOnInit() {
    // Simulate loading time - you can adjust this or make it dynamic
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // 4 seconds loading time
  }


}
