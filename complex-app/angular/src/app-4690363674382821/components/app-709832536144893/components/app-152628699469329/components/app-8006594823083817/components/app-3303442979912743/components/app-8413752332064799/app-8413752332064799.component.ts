import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8413752332064799',
  standalone: true,
  templateUrl: './app-8413752332064799.component.html',
  styleUrl: './app-8413752332064799.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8413752332064799Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
