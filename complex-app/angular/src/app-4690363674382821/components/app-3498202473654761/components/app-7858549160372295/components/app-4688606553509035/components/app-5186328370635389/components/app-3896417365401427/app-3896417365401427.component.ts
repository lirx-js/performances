import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3896417365401427',
  standalone: true,
  templateUrl: './app-3896417365401427.component.html',
  styleUrl: './app-3896417365401427.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3896417365401427Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
