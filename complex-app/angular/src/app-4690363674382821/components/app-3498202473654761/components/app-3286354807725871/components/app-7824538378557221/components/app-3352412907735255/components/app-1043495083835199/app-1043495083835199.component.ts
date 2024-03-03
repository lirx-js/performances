import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1043495083835199',
  standalone: true,
  templateUrl: './app-1043495083835199.component.html',
  styleUrl: './app-1043495083835199.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1043495083835199Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
