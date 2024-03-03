import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4661073408779923',
  standalone: true,
  templateUrl: './app-4661073408779923.component.html',
  styleUrl: './app-4661073408779923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4661073408779923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
