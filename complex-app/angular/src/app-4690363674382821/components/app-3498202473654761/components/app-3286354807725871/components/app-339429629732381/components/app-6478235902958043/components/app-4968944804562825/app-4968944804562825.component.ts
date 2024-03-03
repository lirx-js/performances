import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4968944804562825',
  standalone: true,
  templateUrl: './app-4968944804562825.component.html',
  styleUrl: './app-4968944804562825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4968944804562825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
