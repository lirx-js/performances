import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8334658477141721',
  standalone: true,
  templateUrl: './app-8334658477141721.component.html',
  styleUrl: './app-8334658477141721.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8334658477141721Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
