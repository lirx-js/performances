import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4953659714411501',
  standalone: true,
  templateUrl: './app-4953659714411501.component.html',
  styleUrl: './app-4953659714411501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4953659714411501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
