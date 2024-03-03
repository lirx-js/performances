import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4834370788253521',
  standalone: true,
  templateUrl: './app-4834370788253521.component.html',
  styleUrl: './app-4834370788253521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4834370788253521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
