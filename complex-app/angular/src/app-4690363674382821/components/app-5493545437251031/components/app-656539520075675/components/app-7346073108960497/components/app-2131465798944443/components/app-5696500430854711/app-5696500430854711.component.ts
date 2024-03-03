import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5696500430854711',
  standalone: true,
  templateUrl: './app-5696500430854711.component.html',
  styleUrl: './app-5696500430854711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5696500430854711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
