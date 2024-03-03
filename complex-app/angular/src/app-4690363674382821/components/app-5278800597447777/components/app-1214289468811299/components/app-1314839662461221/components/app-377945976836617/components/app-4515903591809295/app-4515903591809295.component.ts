import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4515903591809295',
  standalone: true,
  templateUrl: './app-4515903591809295.component.html',
  styleUrl: './app-4515903591809295.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4515903591809295Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
