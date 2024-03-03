import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7588151348300093',
  standalone: true,
  templateUrl: './app-7588151348300093.component.html',
  styleUrl: './app-7588151348300093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7588151348300093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
