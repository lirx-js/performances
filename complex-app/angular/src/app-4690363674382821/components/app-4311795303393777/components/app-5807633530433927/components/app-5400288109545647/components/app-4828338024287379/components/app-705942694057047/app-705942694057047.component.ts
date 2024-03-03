import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-705942694057047',
  standalone: true,
  templateUrl: './app-705942694057047.component.html',
  styleUrl: './app-705942694057047.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App705942694057047Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
