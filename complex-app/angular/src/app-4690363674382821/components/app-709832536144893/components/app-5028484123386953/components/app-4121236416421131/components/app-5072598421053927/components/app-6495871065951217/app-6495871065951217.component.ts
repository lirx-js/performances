import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6495871065951217',
  standalone: true,
  templateUrl: './app-6495871065951217.component.html',
  styleUrl: './app-6495871065951217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6495871065951217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
