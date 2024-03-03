import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8821759706544287',
  standalone: true,
  templateUrl: './app-8821759706544287.component.html',
  styleUrl: './app-8821759706544287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8821759706544287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
