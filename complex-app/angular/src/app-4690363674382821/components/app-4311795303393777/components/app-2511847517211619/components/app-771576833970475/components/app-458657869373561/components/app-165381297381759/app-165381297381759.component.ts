import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-165381297381759',
  standalone: true,
  templateUrl: './app-165381297381759.component.html',
  styleUrl: './app-165381297381759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App165381297381759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
