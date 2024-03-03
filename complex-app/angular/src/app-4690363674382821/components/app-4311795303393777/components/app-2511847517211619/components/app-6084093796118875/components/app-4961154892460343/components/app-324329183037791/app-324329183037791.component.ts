import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-324329183037791',
  standalone: true,
  templateUrl: './app-324329183037791.component.html',
  styleUrl: './app-324329183037791.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App324329183037791Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
