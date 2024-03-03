import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5337014490369217',
  standalone: true,
  templateUrl: './app-5337014490369217.component.html',
  styleUrl: './app-5337014490369217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5337014490369217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
