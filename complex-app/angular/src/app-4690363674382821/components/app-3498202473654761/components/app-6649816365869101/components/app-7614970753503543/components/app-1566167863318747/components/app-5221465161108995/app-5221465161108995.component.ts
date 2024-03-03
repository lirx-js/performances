import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5221465161108995',
  standalone: true,
  templateUrl: './app-5221465161108995.component.html',
  styleUrl: './app-5221465161108995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5221465161108995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
