import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3745235158503627',
  standalone: true,
  templateUrl: './app-3745235158503627.component.html',
  styleUrl: './app-3745235158503627.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3745235158503627Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
