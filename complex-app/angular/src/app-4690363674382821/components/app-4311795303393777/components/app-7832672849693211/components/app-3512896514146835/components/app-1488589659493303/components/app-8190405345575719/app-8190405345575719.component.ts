import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8190405345575719',
  standalone: true,
  templateUrl: './app-8190405345575719.component.html',
  styleUrl: './app-8190405345575719.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8190405345575719Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
