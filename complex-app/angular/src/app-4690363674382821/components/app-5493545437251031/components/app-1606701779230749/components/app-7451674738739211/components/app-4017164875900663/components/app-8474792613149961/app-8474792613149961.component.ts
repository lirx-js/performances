import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8474792613149961',
  standalone: true,
  templateUrl: './app-8474792613149961.component.html',
  styleUrl: './app-8474792613149961.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8474792613149961Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
