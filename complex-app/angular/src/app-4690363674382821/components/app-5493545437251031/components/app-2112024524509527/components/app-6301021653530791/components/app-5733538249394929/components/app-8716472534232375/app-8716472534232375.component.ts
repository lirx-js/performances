import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8716472534232375',
  standalone: true,
  templateUrl: './app-8716472534232375.component.html',
  styleUrl: './app-8716472534232375.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8716472534232375Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
