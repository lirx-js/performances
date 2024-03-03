import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-960880408833121',
  standalone: true,
  templateUrl: './app-960880408833121.component.html',
  styleUrl: './app-960880408833121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App960880408833121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
