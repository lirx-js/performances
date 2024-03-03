import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5490529837239879',
  standalone: true,
  templateUrl: './app-5490529837239879.component.html',
  styleUrl: './app-5490529837239879.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5490529837239879Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
