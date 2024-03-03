import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5842611176432859',
  standalone: true,
  templateUrl: './app-5842611176432859.component.html',
  styleUrl: './app-5842611176432859.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5842611176432859Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
