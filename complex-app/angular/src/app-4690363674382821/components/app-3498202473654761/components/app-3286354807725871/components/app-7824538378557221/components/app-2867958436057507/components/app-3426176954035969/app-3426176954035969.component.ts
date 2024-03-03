import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3426176954035969',
  standalone: true,
  templateUrl: './app-3426176954035969.component.html',
  styleUrl: './app-3426176954035969.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3426176954035969Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
