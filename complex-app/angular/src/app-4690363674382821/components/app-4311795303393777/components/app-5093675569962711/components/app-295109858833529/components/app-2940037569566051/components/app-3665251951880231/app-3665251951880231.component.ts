import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3665251951880231',
  standalone: true,
  templateUrl: './app-3665251951880231.component.html',
  styleUrl: './app-3665251951880231.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3665251951880231Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}