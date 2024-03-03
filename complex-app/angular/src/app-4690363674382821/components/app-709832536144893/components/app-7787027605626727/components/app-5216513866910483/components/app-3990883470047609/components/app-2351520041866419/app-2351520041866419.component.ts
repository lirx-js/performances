import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2351520041866419',
  standalone: true,
  templateUrl: './app-2351520041866419.component.html',
  styleUrl: './app-2351520041866419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2351520041866419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
