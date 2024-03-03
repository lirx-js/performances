import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5480637473160641',
  standalone: true,
  templateUrl: './app-5480637473160641.component.html',
  styleUrl: './app-5480637473160641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5480637473160641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
