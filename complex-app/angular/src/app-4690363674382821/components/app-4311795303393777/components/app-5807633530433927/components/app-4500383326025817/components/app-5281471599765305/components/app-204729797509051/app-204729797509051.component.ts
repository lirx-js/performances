import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-204729797509051',
  standalone: true,
  templateUrl: './app-204729797509051.component.html',
  styleUrl: './app-204729797509051.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App204729797509051Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
