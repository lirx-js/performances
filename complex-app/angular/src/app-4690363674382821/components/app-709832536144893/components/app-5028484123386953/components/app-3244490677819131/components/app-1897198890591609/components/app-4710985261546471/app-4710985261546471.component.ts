import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4710985261546471',
  standalone: true,
  templateUrl: './app-4710985261546471.component.html',
  styleUrl: './app-4710985261546471.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4710985261546471Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
