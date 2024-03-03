import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5156941292271229',
  standalone: true,
  templateUrl: './app-5156941292271229.component.html',
  styleUrl: './app-5156941292271229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5156941292271229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
