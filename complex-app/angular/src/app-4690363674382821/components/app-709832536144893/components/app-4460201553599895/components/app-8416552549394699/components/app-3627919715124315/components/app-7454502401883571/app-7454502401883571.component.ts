import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7454502401883571',
  standalone: true,
  templateUrl: './app-7454502401883571.component.html',
  styleUrl: './app-7454502401883571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7454502401883571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
