import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4133886625773495',
  standalone: true,
  templateUrl: './app-4133886625773495.component.html',
  styleUrl: './app-4133886625773495.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4133886625773495Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
