import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7282255476821469',
  standalone: true,
  templateUrl: './app-7282255476821469.component.html',
  styleUrl: './app-7282255476821469.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7282255476821469Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
