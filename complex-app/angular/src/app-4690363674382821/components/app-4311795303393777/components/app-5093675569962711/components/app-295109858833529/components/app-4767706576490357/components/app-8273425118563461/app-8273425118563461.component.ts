import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8273425118563461',
  standalone: true,
  templateUrl: './app-8273425118563461.component.html',
  styleUrl: './app-8273425118563461.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8273425118563461Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
