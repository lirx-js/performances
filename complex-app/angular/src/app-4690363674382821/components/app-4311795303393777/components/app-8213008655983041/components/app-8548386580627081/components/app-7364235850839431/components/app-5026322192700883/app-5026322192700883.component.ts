import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5026322192700883',
  standalone: true,
  templateUrl: './app-5026322192700883.component.html',
  styleUrl: './app-5026322192700883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5026322192700883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
