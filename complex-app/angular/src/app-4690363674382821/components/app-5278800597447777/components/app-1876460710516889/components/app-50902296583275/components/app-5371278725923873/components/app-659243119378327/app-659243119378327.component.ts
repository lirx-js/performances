import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-659243119378327',
  standalone: true,
  templateUrl: './app-659243119378327.component.html',
  styleUrl: './app-659243119378327.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App659243119378327Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
