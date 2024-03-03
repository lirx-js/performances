import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5699372527089191',
  standalone: true,
  templateUrl: './app-5699372527089191.component.html',
  styleUrl: './app-5699372527089191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5699372527089191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
