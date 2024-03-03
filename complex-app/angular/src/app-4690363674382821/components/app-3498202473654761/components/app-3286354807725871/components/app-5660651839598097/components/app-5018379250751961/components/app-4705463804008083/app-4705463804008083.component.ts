import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4705463804008083',
  standalone: true,
  templateUrl: './app-4705463804008083.component.html',
  styleUrl: './app-4705463804008083.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4705463804008083Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
