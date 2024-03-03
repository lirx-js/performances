import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  base64Url = signal<string>('');
  dragOver = signal<boolean>(false);

  #readBlobAsDataUrl(blob: Blob): Promise<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise<string>(resolve => {
      reader.onloadend = (): void => {
        resolve(reader.result as string);
      };
    });
  }

  onFileChange(file: File): void {
    this.#readBlobAsDataUrl(file).then((url: string) => {
      this.base64Url.set(url);
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragOver.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const file: File | null | undefined = event.dataTransfer?.items?.[0].getAsFile();
    if (file) {
      this.onFileChange(file);
    } else {
      alert('Please drop a file');
    }
  }
}
