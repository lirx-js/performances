import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3503168381131187',
  standalone: true,
  templateUrl: './app-3503168381131187.component.html',
  styleUrl: './app-3503168381131187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3503168381131187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
