import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3032433472413933',
  standalone: true,
  templateUrl: './app-3032433472413933.component.html',
  styleUrl: './app-3032433472413933.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3032433472413933Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
