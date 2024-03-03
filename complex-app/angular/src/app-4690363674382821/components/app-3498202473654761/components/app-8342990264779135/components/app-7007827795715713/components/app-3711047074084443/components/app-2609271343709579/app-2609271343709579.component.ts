import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2609271343709579',
  standalone: true,
  templateUrl: './app-2609271343709579.component.html',
  styleUrl: './app-2609271343709579.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2609271343709579Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
