import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7326474023050121',
  standalone: true,
  templateUrl: './app-7326474023050121.component.html',
  styleUrl: './app-7326474023050121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7326474023050121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
