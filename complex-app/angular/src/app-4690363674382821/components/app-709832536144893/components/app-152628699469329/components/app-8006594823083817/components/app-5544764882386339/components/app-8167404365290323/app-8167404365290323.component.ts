import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8167404365290323',
  standalone: true,
  templateUrl: './app-8167404365290323.component.html',
  styleUrl: './app-8167404365290323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8167404365290323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
