import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1612011885675917',
  standalone: true,
  templateUrl: './app-1612011885675917.component.html',
  styleUrl: './app-1612011885675917.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1612011885675917Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
