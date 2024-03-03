import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4510387245343889',
  standalone: true,
  templateUrl: './app-4510387245343889.component.html',
  styleUrl: './app-4510387245343889.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4510387245343889Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
