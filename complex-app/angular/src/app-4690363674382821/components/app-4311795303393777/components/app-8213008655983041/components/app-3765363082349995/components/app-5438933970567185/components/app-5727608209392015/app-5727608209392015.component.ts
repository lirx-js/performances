import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5727608209392015',
  standalone: true,
  templateUrl: './app-5727608209392015.component.html',
  styleUrl: './app-5727608209392015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5727608209392015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
