import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2300058331590501',
  standalone: true,
  templateUrl: './app-2300058331590501.component.html',
  styleUrl: './app-2300058331590501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2300058331590501Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
