import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3728828618102925',
  standalone: true,
  templateUrl: './app-3728828618102925.component.html',
  styleUrl: './app-3728828618102925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3728828618102925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
