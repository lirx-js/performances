import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4372742449167401',
  standalone: true,
  templateUrl: './app-4372742449167401.component.html',
  styleUrl: './app-4372742449167401.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4372742449167401Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
