import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-362582251430951',
  standalone: true,
  templateUrl: './app-362582251430951.component.html',
  styleUrl: './app-362582251430951.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App362582251430951Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
