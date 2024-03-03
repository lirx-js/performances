import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4564493279624683',
  standalone: true,
  templateUrl: './app-4564493279624683.component.html',
  styleUrl: './app-4564493279624683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4564493279624683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
