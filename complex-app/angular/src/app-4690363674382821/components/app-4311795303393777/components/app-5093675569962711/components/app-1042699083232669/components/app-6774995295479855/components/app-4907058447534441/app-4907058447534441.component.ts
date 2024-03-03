import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4907058447534441',
  standalone: true,
  templateUrl: './app-4907058447534441.component.html',
  styleUrl: './app-4907058447534441.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4907058447534441Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
