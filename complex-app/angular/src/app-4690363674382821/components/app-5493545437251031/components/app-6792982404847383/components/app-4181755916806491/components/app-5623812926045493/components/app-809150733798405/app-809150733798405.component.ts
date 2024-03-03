import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-809150733798405',
  standalone: true,
  templateUrl: './app-809150733798405.component.html',
  styleUrl: './app-809150733798405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App809150733798405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
