import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4740256565988303',
  standalone: true,
  templateUrl: './app-4740256565988303.component.html',
  styleUrl: './app-4740256565988303.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4740256565988303Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
