import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, afterNextRender } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangDirectionService {
public language_direction:'rtl' | 'ltr'= 'ltr'
public CurrentLanguage:string | null = 'en'
  constructor(private translateService:TranslateService) {
    afterNextRender(()=>{
      const lang = localStorage.getItem('current-language')
      this.language_direction = lang==='ar'?'rtl':'ltr'  
      this.CurrentLanguage = lang
      this.translateService.setDefaultLang(this.currentLanguage || 'en');
    })
   }
   
   public set setDirection(lang : string) {
    localStorage.setItem('current-language',lang)
    this.language_direction = lang ==='ar'?'rtl':'ltr' 
  }
  
  public get getDirection() : string {
    return this.language_direction
  }
  
  public get currentLanguage() : string | null{
    return this.CurrentLanguage
  }
  
  
   
}
