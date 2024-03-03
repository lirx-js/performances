import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7325697767608595',
  standalone: true,
  templateUrl: './app-7325697767608595.component.html',
  styleUrl: './app-7325697767608595.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7325697767608595Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
