import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3489494693763315',
  standalone: true,
  templateUrl: './app-3489494693763315.component.html',
  styleUrl: './app-3489494693763315.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3489494693763315Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
