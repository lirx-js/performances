import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-690627924641995',
  standalone: true,
  templateUrl: './app-690627924641995.component.html',
  styleUrl: './app-690627924641995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App690627924641995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
