import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5524789524466743',
  standalone: true,
  templateUrl: './app-5524789524466743.component.html',
  styleUrl: './app-5524789524466743.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5524789524466743Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
