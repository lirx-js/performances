import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8200194905428087',
  standalone: true,
  templateUrl: './app-8200194905428087.component.html',
  styleUrl: './app-8200194905428087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8200194905428087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
