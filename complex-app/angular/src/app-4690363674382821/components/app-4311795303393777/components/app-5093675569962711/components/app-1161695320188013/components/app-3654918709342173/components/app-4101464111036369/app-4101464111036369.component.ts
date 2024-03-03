import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4101464111036369',
  standalone: true,
  templateUrl: './app-4101464111036369.component.html',
  styleUrl: './app-4101464111036369.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4101464111036369Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
