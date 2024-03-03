import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4949947434854825',
  standalone: true,
  templateUrl: './app-4949947434854825.component.html',
  styleUrl: './app-4949947434854825.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4949947434854825Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
