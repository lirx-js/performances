import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1367765398106775',
  standalone: true,
  templateUrl: './app-1367765398106775.component.html',
  styleUrl: './app-1367765398106775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1367765398106775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
