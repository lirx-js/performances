import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3608537522184279',
  standalone: true,
  templateUrl: './app-3608537522184279.component.html',
  styleUrl: './app-3608537522184279.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3608537522184279Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
