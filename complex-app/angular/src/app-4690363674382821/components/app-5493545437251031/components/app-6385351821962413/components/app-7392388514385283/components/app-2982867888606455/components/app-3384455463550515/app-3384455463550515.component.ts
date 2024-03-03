import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3384455463550515',
  standalone: true,
  templateUrl: './app-3384455463550515.component.html',
  styleUrl: './app-3384455463550515.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3384455463550515Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
