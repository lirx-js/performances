import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3946451314376789',
  standalone: true,
  templateUrl: './app-3946451314376789.component.html',
  styleUrl: './app-3946451314376789.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3946451314376789Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
