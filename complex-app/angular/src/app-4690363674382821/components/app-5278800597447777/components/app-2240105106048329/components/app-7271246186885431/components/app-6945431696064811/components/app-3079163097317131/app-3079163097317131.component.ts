import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3079163097317131',
  standalone: true,
  templateUrl: './app-3079163097317131.component.html',
  styleUrl: './app-3079163097317131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3079163097317131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
