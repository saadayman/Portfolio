import { Component, PLATFORM_ID, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './home-page/test/test.component';
import { HeaderComponent } from './header/header.component';
import * as AOS from 'aos';
import { AppShellComponent } from './app-shell/app-shell.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestComponent,HeaderComponent,AppShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title_name= 'Saed Ayman'
  constructor(public title:Title){
    
    afterNextRender(()=>{
      AOS.init();//AOS - 2
      // AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    })
  this.title.setTitle($localize `${this.title_name}`)    
  }


}
