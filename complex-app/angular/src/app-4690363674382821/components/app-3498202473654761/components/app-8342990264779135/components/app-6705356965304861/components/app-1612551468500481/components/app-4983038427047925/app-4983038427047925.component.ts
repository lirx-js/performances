import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4983038427047925',
  standalone: true,
  templateUrl: './app-4983038427047925.component.html',
  styleUrl: './app-4983038427047925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4983038427047925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
