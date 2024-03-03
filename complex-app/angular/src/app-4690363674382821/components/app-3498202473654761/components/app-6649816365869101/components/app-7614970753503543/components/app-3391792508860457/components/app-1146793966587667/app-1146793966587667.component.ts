import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1146793966587667',
  standalone: true,
  templateUrl: './app-1146793966587667.component.html',
  styleUrl: './app-1146793966587667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1146793966587667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
