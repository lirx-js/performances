import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4737136270284749',
  standalone: true,
  templateUrl: './app-4737136270284749.component.html',
  styleUrl: './app-4737136270284749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4737136270284749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
