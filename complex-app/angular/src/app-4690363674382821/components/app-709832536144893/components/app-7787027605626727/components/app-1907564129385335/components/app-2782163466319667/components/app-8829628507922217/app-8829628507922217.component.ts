import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8829628507922217',
  standalone: true,
  templateUrl: './app-8829628507922217.component.html',
  styleUrl: './app-8829628507922217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8829628507922217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
