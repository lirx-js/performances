import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5217829984686775',
  standalone: true,
  templateUrl: './app-5217829984686775.component.html',
  styleUrl: './app-5217829984686775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5217829984686775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
