import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7465532560309665',
  standalone: true,
  templateUrl: './app-7465532560309665.component.html',
  styleUrl: './app-7465532560309665.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7465532560309665Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
