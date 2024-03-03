import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8631963414316477',
  standalone: true,
  templateUrl: './app-8631963414316477.component.html',
  styleUrl: './app-8631963414316477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8631963414316477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
