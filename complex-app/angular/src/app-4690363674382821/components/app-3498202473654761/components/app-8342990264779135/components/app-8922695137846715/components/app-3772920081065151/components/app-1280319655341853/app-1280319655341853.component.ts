import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1280319655341853',
  standalone: true,
  templateUrl: './app-1280319655341853.component.html',
  styleUrl: './app-1280319655341853.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1280319655341853Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
