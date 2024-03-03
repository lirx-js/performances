import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3641221292692071',
  standalone: true,
  templateUrl: './app-3641221292692071.component.html',
  styleUrl: './app-3641221292692071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3641221292692071Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
