import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-825286288609017',
  standalone: true,
  templateUrl: './app-825286288609017.component.html',
  styleUrl: './app-825286288609017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App825286288609017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
