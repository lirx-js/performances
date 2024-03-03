import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5185862418274851',
  standalone: true,
  templateUrl: './app-5185862418274851.component.html',
  styleUrl: './app-5185862418274851.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5185862418274851Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
