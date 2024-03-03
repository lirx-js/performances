import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6932551199564755',
  standalone: true,
  templateUrl: './app-6932551199564755.component.html',
  styleUrl: './app-6932551199564755.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6932551199564755Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
