import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8281526263367325',
  standalone: true,
  templateUrl: './app-8281526263367325.component.html',
  styleUrl: './app-8281526263367325.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8281526263367325Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
