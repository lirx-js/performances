import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4859582625748949',
  standalone: true,
  templateUrl: './app-4859582625748949.component.html',
  styleUrl: './app-4859582625748949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4859582625748949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
