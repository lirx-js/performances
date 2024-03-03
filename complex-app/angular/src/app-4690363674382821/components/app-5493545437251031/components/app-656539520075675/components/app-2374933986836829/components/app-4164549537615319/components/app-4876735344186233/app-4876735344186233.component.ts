import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4876735344186233',
  standalone: true,
  templateUrl: './app-4876735344186233.component.html',
  styleUrl: './app-4876735344186233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4876735344186233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
