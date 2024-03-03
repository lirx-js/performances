import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7208239008190745',
  standalone: true,
  templateUrl: './app-7208239008190745.component.html',
  styleUrl: './app-7208239008190745.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7208239008190745Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
