import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8776998648530359',
  standalone: true,
  templateUrl: './app-8776998648530359.component.html',
  styleUrl: './app-8776998648530359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8776998648530359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
