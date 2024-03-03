import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4516680691548667',
  standalone: true,
  templateUrl: './app-4516680691548667.component.html',
  styleUrl: './app-4516680691548667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4516680691548667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
