import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5015423159129093',
  standalone: true,
  templateUrl: './app-5015423159129093.component.html',
  styleUrl: './app-5015423159129093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5015423159129093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
