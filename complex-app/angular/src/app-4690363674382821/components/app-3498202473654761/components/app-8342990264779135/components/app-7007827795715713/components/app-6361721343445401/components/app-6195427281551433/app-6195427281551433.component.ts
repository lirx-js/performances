import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6195427281551433',
  standalone: true,
  templateUrl: './app-6195427281551433.component.html',
  styleUrl: './app-6195427281551433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6195427281551433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
