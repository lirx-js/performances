import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4835735811640093',
  standalone: true,
  templateUrl: './app-4835735811640093.component.html',
  styleUrl: './app-4835735811640093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4835735811640093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
