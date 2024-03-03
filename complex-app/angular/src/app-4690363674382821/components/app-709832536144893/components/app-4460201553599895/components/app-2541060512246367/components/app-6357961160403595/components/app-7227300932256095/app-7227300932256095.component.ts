import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7227300932256095',
  standalone: true,
  templateUrl: './app-7227300932256095.component.html',
  styleUrl: './app-7227300932256095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7227300932256095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
