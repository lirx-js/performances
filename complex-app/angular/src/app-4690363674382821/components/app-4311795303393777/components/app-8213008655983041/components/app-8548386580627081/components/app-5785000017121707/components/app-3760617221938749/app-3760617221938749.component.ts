import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3760617221938749',
  standalone: true,
  templateUrl: './app-3760617221938749.component.html',
  styleUrl: './app-3760617221938749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3760617221938749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
