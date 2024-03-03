import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6043511212000771',
  standalone: true,
  templateUrl: './app-6043511212000771.component.html',
  styleUrl: './app-6043511212000771.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6043511212000771Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
