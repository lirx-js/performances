import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5469568281125285',
  standalone: true,
  templateUrl: './app-5469568281125285.component.html',
  styleUrl: './app-5469568281125285.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5469568281125285Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
