import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-49976457442959',
  standalone: true,
  templateUrl: './app-49976457442959.component.html',
  styleUrl: './app-49976457442959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App49976457442959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
