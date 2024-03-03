import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-371419422775549',
  standalone: true,
  templateUrl: './app-371419422775549.component.html',
  styleUrl: './app-371419422775549.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App371419422775549Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
