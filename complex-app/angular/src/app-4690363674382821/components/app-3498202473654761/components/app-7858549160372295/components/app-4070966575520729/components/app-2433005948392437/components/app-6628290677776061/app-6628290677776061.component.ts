import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6628290677776061',
  standalone: true,
  templateUrl: './app-6628290677776061.component.html',
  styleUrl: './app-6628290677776061.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6628290677776061Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
