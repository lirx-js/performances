import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5164581292972009',
  standalone: true,
  templateUrl: './app-5164581292972009.component.html',
  styleUrl: './app-5164581292972009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5164581292972009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
