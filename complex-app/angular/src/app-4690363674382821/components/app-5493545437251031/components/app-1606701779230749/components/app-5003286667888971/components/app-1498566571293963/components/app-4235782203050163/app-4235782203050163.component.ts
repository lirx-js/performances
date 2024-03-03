import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4235782203050163',
  standalone: true,
  templateUrl: './app-4235782203050163.component.html',
  styleUrl: './app-4235782203050163.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4235782203050163Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
