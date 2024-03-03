import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1302574841428361',
  standalone: true,
  templateUrl: './app-1302574841428361.component.html',
  styleUrl: './app-1302574841428361.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1302574841428361Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
