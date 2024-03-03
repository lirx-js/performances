import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8655164010221763',
  standalone: true,
  templateUrl: './app-8655164010221763.component.html',
  styleUrl: './app-8655164010221763.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8655164010221763Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
