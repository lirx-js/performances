import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1363866541201287',
  standalone: true,
  templateUrl: './app-1363866541201287.component.html',
  styleUrl: './app-1363866541201287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1363866541201287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
