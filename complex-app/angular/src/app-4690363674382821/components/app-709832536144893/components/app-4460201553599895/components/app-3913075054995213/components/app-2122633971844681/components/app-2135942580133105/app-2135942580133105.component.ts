import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2135942580133105',
  standalone: true,
  templateUrl: './app-2135942580133105.component.html',
  styleUrl: './app-2135942580133105.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2135942580133105Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
