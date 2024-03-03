import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6990694757916537',
  standalone: true,
  templateUrl: './app-6990694757916537.component.html',
  styleUrl: './app-6990694757916537.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6990694757916537Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
