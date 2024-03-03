import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3575402890884865',
  standalone: true,
  templateUrl: './app-3575402890884865.component.html',
  styleUrl: './app-3575402890884865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3575402890884865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
