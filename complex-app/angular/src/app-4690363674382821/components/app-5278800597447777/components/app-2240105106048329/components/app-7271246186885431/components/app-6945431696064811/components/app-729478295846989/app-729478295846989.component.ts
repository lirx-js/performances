import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-729478295846989',
  standalone: true,
  templateUrl: './app-729478295846989.component.html',
  styleUrl: './app-729478295846989.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App729478295846989Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
