import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3555825938210229',
  standalone: true,
  templateUrl: './app-3555825938210229.component.html',
  styleUrl: './app-3555825938210229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3555825938210229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
