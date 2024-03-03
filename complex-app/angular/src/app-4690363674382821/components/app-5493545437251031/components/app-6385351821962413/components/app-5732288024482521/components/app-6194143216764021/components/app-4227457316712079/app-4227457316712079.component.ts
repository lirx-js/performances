import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4227457316712079',
  standalone: true,
  templateUrl: './app-4227457316712079.component.html',
  styleUrl: './app-4227457316712079.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4227457316712079Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
