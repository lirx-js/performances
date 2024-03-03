import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4897477713280821',
  standalone: true,
  templateUrl: './app-4897477713280821.component.html',
  styleUrl: './app-4897477713280821.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4897477713280821Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
