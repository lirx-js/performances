import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4229390698697115',
  standalone: true,
  templateUrl: './app-4229390698697115.component.html',
  styleUrl: './app-4229390698697115.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4229390698697115Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
