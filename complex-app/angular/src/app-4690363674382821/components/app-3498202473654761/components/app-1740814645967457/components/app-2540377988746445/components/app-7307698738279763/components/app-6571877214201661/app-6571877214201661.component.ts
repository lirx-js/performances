import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6571877214201661',
  standalone: true,
  templateUrl: './app-6571877214201661.component.html',
  styleUrl: './app-6571877214201661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6571877214201661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
