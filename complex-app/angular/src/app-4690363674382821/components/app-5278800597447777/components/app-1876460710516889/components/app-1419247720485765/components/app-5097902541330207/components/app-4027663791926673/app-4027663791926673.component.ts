import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4027663791926673',
  standalone: true,
  templateUrl: './app-4027663791926673.component.html',
  styleUrl: './app-4027663791926673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4027663791926673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
