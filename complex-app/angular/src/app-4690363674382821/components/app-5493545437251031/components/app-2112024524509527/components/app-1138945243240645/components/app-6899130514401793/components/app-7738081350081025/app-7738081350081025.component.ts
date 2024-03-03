import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7738081350081025',
  standalone: true,
  templateUrl: './app-7738081350081025.component.html',
  styleUrl: './app-7738081350081025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7738081350081025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
