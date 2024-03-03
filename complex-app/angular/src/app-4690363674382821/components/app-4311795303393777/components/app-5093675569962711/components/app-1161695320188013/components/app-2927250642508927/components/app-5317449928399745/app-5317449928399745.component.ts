import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5317449928399745',
  standalone: true,
  templateUrl: './app-5317449928399745.component.html',
  styleUrl: './app-5317449928399745.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5317449928399745Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
