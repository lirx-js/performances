import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5808788431490659',
  standalone: true,
  templateUrl: './app-5808788431490659.component.html',
  styleUrl: './app-5808788431490659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5808788431490659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
