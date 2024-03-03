import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8989771080952485',
  standalone: true,
  templateUrl: './app-8989771080952485.component.html',
  styleUrl: './app-8989771080952485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8989771080952485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
