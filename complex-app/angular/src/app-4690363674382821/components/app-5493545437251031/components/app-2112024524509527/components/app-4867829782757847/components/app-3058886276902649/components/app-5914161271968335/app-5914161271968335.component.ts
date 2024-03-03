import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5914161271968335',
  standalone: true,
  templateUrl: './app-5914161271968335.component.html',
  styleUrl: './app-5914161271968335.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5914161271968335Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
