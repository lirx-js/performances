import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6761945649461787',
  standalone: true,
  templateUrl: './app-6761945649461787.component.html',
  styleUrl: './app-6761945649461787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6761945649461787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
