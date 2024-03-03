import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3795954071076341',
  standalone: true,
  templateUrl: './app-3795954071076341.component.html',
  styleUrl: './app-3795954071076341.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3795954071076341Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
