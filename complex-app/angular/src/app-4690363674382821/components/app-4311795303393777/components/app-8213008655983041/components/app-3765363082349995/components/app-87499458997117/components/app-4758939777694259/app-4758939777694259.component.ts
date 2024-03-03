import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4758939777694259',
  standalone: true,
  templateUrl: './app-4758939777694259.component.html',
  styleUrl: './app-4758939777694259.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4758939777694259Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
