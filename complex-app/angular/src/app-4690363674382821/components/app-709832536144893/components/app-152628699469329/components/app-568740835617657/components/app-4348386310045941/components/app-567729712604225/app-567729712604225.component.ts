import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-567729712604225',
  standalone: true,
  templateUrl: './app-567729712604225.component.html',
  styleUrl: './app-567729712604225.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App567729712604225Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
