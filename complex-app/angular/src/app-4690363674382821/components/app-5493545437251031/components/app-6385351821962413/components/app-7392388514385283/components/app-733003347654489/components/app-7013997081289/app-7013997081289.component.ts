import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7013997081289',
  standalone: true,
  templateUrl: './app-7013997081289.component.html',
  styleUrl: './app-7013997081289.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7013997081289Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
