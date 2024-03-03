import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-864780823239753',
  standalone: true,
  templateUrl: './app-864780823239753.component.html',
  styleUrl: './app-864780823239753.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App864780823239753Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
