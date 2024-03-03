import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3077679540494195',
  standalone: true,
  templateUrl: './app-3077679540494195.component.html',
  styleUrl: './app-3077679540494195.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3077679540494195Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
