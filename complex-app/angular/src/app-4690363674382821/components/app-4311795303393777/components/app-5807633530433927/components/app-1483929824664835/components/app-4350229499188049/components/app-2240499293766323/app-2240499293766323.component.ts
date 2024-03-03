import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2240499293766323',
  standalone: true,
  templateUrl: './app-2240499293766323.component.html',
  styleUrl: './app-2240499293766323.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2240499293766323Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
