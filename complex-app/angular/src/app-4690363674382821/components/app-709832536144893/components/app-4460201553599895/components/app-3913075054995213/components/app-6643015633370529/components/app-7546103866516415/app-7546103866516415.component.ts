import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7546103866516415',
  standalone: true,
  templateUrl: './app-7546103866516415.component.html',
  styleUrl: './app-7546103866516415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7546103866516415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
