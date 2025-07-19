import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LangDirectionService {
  private platformId = inject(PLATFORM_ID);
  public language_direction: 'rtl' | 'ltr' = 'ltr';
  public CurrentLanguage: string = 'en';

  constructor(
    private translateService: TranslateService,
    private storageService: StorageService
  ) {
    // Set default language immediately
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    // Initialize language after render to avoid SSR issues
    afterNextRender(() => {
      this.initializeLanguage();
    });
  }

      public set setDirection(lang: string) {
    this.storageService.setItem('current-language', lang);
    this.language_direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.CurrentLanguage = lang;
  }

  public get getDirection() : string {
    return this.language_direction
  }

  public get currentLanguage(): string {
    return this.CurrentLanguage;
  }

  // Method to ensure language is properly initialized
  public initializeLanguage(): void {
    const lang = this.storageService.getItem('current-language') || 'en';
    this.CurrentLanguage = lang;
    this.language_direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.translateService.use(lang);
    console.log('Language initialized:', lang, 'Direction:', this.language_direction);
  }



}
