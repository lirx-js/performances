import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7466943541772025',
  standalone: true,
  templateUrl: './app-7466943541772025.component.html',
  styleUrl: './app-7466943541772025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7466943541772025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
