import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5431121109706827',
  standalone: true,
  templateUrl: './app-5431121109706827.component.html',
  styleUrl: './app-5431121109706827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5431121109706827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
