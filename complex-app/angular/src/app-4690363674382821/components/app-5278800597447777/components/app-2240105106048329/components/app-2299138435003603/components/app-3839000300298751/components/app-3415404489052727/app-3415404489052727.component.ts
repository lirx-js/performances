import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3415404489052727',
  standalone: true,
  templateUrl: './app-3415404489052727.component.html',
  styleUrl: './app-3415404489052727.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3415404489052727Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
