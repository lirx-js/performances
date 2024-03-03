import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3254078876825761',
  standalone: true,
  templateUrl: './app-3254078876825761.component.html',
  styleUrl: './app-3254078876825761.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3254078876825761Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
