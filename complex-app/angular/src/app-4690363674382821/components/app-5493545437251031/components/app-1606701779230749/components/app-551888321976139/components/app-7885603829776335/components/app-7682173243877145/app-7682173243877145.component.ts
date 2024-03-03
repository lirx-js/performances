import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7682173243877145',
  standalone: true,
  templateUrl: './app-7682173243877145.component.html',
  styleUrl: './app-7682173243877145.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7682173243877145Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
