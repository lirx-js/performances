import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7577681773183505',
  standalone: true,
  templateUrl: './app-7577681773183505.component.html',
  styleUrl: './app-7577681773183505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7577681773183505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
