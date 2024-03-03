import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4745438146021727',
  standalone: true,
  templateUrl: './app-4745438146021727.component.html',
  styleUrl: './app-4745438146021727.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4745438146021727Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
