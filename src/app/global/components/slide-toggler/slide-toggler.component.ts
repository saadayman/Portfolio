import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slide-toggler',
  templateUrl: './slide-toggler.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./slide-toggler.component.scss']
})
export class SlideTogglerComponent {
  @Input() isChecked: boolean = false;
  @Input() defaultColor: string = '#E0E0E0';
  @Input() checkedColor: string = '#007BFF';
  @Input() defaultTextColor: string = '#B2B2B2';
  @Input() checkedTextColor: string = '#FFFFFF';
  @Input() iconDefaultColor: string = '#B2B2B2';
  @Input() iconCheckedColor: string = '#007BFF';
  @Input() circleIconClass: string = '';
  @Input() defaultToggleText: string = '';
  @Input() checkedToggleText: string = '';
  @Input() containerMarginBlock!:string
  @Input() containerMarginInline!:string
  @Input() containerMarginRight:string='0px'
  @Input() containerMarginTop1!:string
  @Input() containerMarginLeft!:string
  @Input() containerMarginBottom!:string
  @Input() width: number = 60;
  @Input() height: number = 36;
  @Input() circle_height: number = 24;
  @Input() circle_width: number = 24;
  @Input() textMarginLeft: string = '38.6px';
  @Input() defaultToggleCircleText:string = 'En'
  @Input() checkedToggleCircleText:string = 'Ar'
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  onToggleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.isChecked = input.checked;
    this.toggleChange.emit(this.isChecked);
  }




}
