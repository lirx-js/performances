import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7334143699880475',
  standalone: true,
  templateUrl: './app-7334143699880475.component.html',
  styleUrl: './app-7334143699880475.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7334143699880475Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
