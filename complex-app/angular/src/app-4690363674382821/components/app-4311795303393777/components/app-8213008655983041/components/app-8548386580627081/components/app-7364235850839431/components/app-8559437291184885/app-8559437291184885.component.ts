import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8559437291184885',
  standalone: true,
  templateUrl: './app-8559437291184885.component.html',
  styleUrl: './app-8559437291184885.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8559437291184885Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
