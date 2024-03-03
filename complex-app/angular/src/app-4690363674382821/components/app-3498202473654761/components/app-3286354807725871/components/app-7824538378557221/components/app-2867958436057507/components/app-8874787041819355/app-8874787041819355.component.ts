import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8874787041819355',
  standalone: true,
  templateUrl: './app-8874787041819355.component.html',
  styleUrl: './app-8874787041819355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8874787041819355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
