import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-581858509201565',
  standalone: true,
  templateUrl: './app-581858509201565.component.html',
  styleUrl: './app-581858509201565.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App581858509201565Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
