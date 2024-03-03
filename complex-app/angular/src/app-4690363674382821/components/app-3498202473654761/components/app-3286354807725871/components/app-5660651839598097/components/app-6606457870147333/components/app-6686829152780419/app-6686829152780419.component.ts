import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6686829152780419',
  standalone: true,
  templateUrl: './app-6686829152780419.component.html',
  styleUrl: './app-6686829152780419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6686829152780419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
