import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6100701115133935',
  standalone: true,
  templateUrl: './app-6100701115133935.component.html',
  styleUrl: './app-6100701115133935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6100701115133935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
