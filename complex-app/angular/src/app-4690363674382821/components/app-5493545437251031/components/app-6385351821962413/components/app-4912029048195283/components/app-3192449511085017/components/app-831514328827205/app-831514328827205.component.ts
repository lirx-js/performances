import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-831514328827205',
  standalone: true,
  templateUrl: './app-831514328827205.component.html',
  styleUrl: './app-831514328827205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App831514328827205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
