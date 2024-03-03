import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1007267908411667',
  standalone: true,
  templateUrl: './app-1007267908411667.component.html',
  styleUrl: './app-1007267908411667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1007267908411667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
