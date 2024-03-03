import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8086111184026347',
  standalone: true,
  templateUrl: './app-8086111184026347.component.html',
  styleUrl: './app-8086111184026347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8086111184026347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
