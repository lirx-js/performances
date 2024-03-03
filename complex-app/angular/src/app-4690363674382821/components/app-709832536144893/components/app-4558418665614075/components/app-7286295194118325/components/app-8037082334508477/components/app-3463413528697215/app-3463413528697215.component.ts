import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3463413528697215',
  standalone: true,
  templateUrl: './app-3463413528697215.component.html',
  styleUrl: './app-3463413528697215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3463413528697215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
