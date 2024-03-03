import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3177213713731995',
  standalone: true,
  templateUrl: './app-3177213713731995.component.html',
  styleUrl: './app-3177213713731995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3177213713731995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
