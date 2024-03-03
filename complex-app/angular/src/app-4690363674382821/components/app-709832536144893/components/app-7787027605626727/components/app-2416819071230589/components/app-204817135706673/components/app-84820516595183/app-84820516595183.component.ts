import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-84820516595183',
  standalone: true,
  templateUrl: './app-84820516595183.component.html',
  styleUrl: './app-84820516595183.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App84820516595183Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
