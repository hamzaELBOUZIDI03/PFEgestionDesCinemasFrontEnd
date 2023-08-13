import { Component, ViewChild, ElementRef } from '@angular/core';
//@ts-ignore
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  @ViewChild('componentContent') componentContent!: ElementRef;

  downloadPDF() {
    const options = {
      filename: 'component.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const element = this.componentContent.nativeElement;
    html2pdf().from(element).set(options).save();
  }
}
