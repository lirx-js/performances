import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7287033018384289',
  standalone: true,
  templateUrl: './app-7287033018384289.component.html',
  styleUrl: './app-7287033018384289.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7287033018384289Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
