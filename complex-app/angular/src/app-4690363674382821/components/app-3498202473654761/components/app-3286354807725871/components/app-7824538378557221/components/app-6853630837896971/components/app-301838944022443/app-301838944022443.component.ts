import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-301838944022443',
  standalone: true,
  templateUrl: './app-301838944022443.component.html',
  styleUrl: './app-301838944022443.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App301838944022443Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
