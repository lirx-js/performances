import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2272350259933405',
  standalone: true,
  templateUrl: './app-2272350259933405.component.html',
  styleUrl: './app-2272350259933405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2272350259933405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
