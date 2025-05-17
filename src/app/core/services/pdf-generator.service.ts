import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Profile } from '../interfaces/profile.interface';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  async generatePDF(profile: Profile, skills: Skill[], template: any) {
    // This is a A4 page in portrait orientation (210px, 297px)
    const doc = new jsPDF();
    const primaryColor: [number, number, number] = [52, 152, 219];
    const secondaryColor: [number, number, number] = [236, 240, 241];
    const tertiaryColor: [number, number, number] = [44, 62, 80];

    // Blue bar
    const verticalBarWidth = 50;
    const verticalBarHeight = 297;
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, verticalBarWidth, verticalBarHeight, 'F'); // (x,y, width, height, Filled)

    // Circle
    doc.setFillColor(255, 255, 255); // Set fill color to red
    doc.circle(24, 30, 16, 'F'); // x, y, radius

    // Photo
    try {
      const base64Image = await this.getImageBase64(profile.photo_3);
      doc.addImage(base64Image, 'JPEG', 9, 15, 30, 30); // fits within blue bar
    } catch (err) {
      console.error('Image load error:', err);
    }

    // Name title
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(25);
    doc.text(profile.name.toUpperCase(), 55, 30);

    // Job
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(profile.title.toUpperCase(), 56, 36);

    // Horizontal bar
    const horizontalBarWidth = 210;
    const horizontalBarHeight = 20;
    doc.setFillColor(...secondaryColor);
    doc.rect(0, 50, horizontalBarWidth, horizontalBarHeight, 'F');

    // Icons in horizontal bar
    // Phone image
    try {
      const base64Image = await this.getImageBase64(template.phone_img);
      doc.addImage(base64Image, 'JPEG', 20, 55, 10, 10);
    } catch (err) {
      console.error('Image load error:', err);
    }

    // Phone text
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(profile.phone, 32, 61);

    // Email image
    try {
      const base64Image = await this.getImageBase64(template.email_img);
      doc.addImage(base64Image, 'JPEG', 75, 55, 10, 10);
    } catch (err) {
      console.error('Image load error:', err);
    }

    // Email text
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(profile.email, 88, 61);

    // Portfolio image
    try {
      const base64Image = await this.getImageBase64(template.portfolio_img);
      doc.addImage(base64Image, 'JPEG', 131, 57, 5, 5);
    } catch (err) {
      console.error('Image load error:', err);
    }

    // Portfolio text
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(profile.portfolio, 140, 61);

    // Small bar
    let smallBarWidth = 10;
    let smallBarHeight = 1;
    doc.setFillColor(255, 255, 255);
    doc.rect(10, 75, smallBarWidth, smallBarHeight, 'F');

    // Education
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(template.c_education, 10, 81);

    // YEAR
    doc.setTextColor(...tertiaryColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('2015-2019', 10, 90);

    // University
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'BOLD');
    doc.setFontSize(9);
    doc.text('UTCH', 10, 94);

    // DEGREE
    doc.setTextColor(...tertiaryColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(profile.title.toUpperCase(), 10, 99);

    // Small bar
    doc.setFillColor(255, 255, 255);
    doc.rect(10, 120, smallBarWidth, smallBarHeight, 'F');

    // Skills
    doc.setTextColor(...secondaryColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(template.c_skills, 10, 126);

    let h = 135;
    for (let i = 0; i < skills.length; i++) {
      doc.setTextColor(...tertiaryColor);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.text(skills[i]['name'].toUpperCase(), 10, h);
      h += 7;
    }

    // Small bar profile
    doc.setFillColor(0, 0, 0);
    doc.rect(55, 75, smallBarWidth, smallBarHeight, 'F');

    // Profile
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(template.c_profile, 55, 81);

    let text = profile.about + ' ' + profile.about_2;
    let x = 55;
    let y = 90;
    let maxWidth = 140;
    let lineHeight = 8;

    drawJustifiedText(doc, text, x, y, maxWidth, lineHeight);

    // Small bar experience
    doc.setFillColor(0, 0, 0);
    doc.rect(55, 150, smallBarWidth, smallBarHeight, 'F');

    // Work Experience
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(template.c_experience, 55, 156);

    let startY = 165;
    const xLeft = 55;
    const xRight = 75;
    maxWidth = 120;
    lineHeight = 8;
    smallBarHeight = 1;

    profile.work_exp.forEach((job, index) => {
      // Year
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.text(job.year, xLeft, startY);

      // Company
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(job.company, xRight, startY);

      // Horizontal rule
      doc.setFillColor(...secondaryColor);
      doc.rect(xRight, startY + 3, maxWidth, smallBarHeight, 'F');

      // Responsabilities
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      drawJustifiedText(doc, job.resposabilities, xRight, startY + 10, maxWidth, lineHeight);

      // Calculate height of responsibilities to add spacing
      const wrapped = doc.splitTextToSize(job.resposabilities, maxWidth);
      const lines = wrapped.length;
      startY += 10 + (lines * lineHeight) + 10; // top margin + content height + bottom margin
});


    // // FREELANCER
    // // Hired year
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(8);
    // doc.text('2019 - 2021', 55, 165);

    // // Company
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'bold');
    // doc.setFontSize(10);
    // doc.text('Freelancer', 75, 165);

    // // hr
    // smallBarWidth = 120;
    // smallBarHeight = 1;
    // doc.setFillColor(...secondaryColor);
    // doc.rect(75, 168, smallBarWidth, smallBarHeight, 'F');

    // // Responsabilities
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(10);
    // doc.text(
    //   'Create small web pages with Angular and vanilla Javascript.',
    //   75,
    //   176
    // );

    // // TGC
    // // Hired year
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(8);
    // doc.text('2021 - 2021', 55, 195);

    // // Company
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'bold');
    // doc.setFontSize(10);
    // doc.text('Tecnología de Gestion y Comunicación', 75, 195);

    // // hr
    // smallBarWidth = 120;
    // smallBarHeight = 1;
    // doc.setFillColor(...secondaryColor);
    // doc.rect(75, 198, smallBarWidth, smallBarHeight, 'F');

    // // Responsabilities
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(10);

    // text =
    //   'Provide support and development to specialized applications in the public sector, migrating some features from Java to Oracle Apex.';
    // x = 75;
    // y = 205;
    // maxWidth = 120;
    // drawJustifiedText(doc, text, x, y, maxWidth, lineHeight);

    // // 3 PILLAR
    // // Hired year
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(8);
    // doc.text('2021 - Present', 55, 225);

    // // Company
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'bold');
    // doc.setFontSize(10);
    // doc.text('3 Pillar Global', 75, 225);

    // // hr
    // smallBarWidth = 120;
    // smallBarHeight = 1;
    // doc.setFillColor(...secondaryColor);
    // doc.rect(75, 228, smallBarWidth, smallBarHeight, 'F');

    // // Responsabilities
    // doc.setTextColor(0, 0, 0);
    // doc.setFont('helvetica', 'normal');

    // text =
    //   'Collaborate with international teams and clients to develop scalable software solutions across frontend, backend, and microservices. Improved applications based on business requirements, resolved bugs, and ensured system reliability. Switched seamlessly between Angular, Node.js, NestJS, Python, and Oracle depending on project needs.';
    // y = 235;
    // drawJustifiedText(doc, text, x, y, maxWidth, lineHeight);

    function drawJustifiedText(
      doc: jsPDF,
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      lineHeight: number,
      font: string = 'helvetica',
      fontStyle: string = 'normal',
      fontSize: number = 10,
      textColor: [number, number, number] = [0, 0, 0]
    ): void {
      const spaceWidth = doc.getTextWidth(' ');
      const wrappedText = doc.splitTextToSize(text, maxWidth);

      doc.setFont(font, fontStyle);
      doc.setFontSize(fontSize);
      doc.setTextColor(...textColor);

      wrappedText.forEach((line: string, index: number) => {
        const words = line.trim().split(/\s+/);
        const isLastLine = index === wrappedText.length - 1;

        if (words.length === 1 || isLastLine) {
          doc.text(line, x, y);
        } else {
          const lineTextWidth = doc.getTextWidth(line);
          const totalSpaces = words.length - 1;
          const extraSpace = (maxWidth - lineTextWidth) / totalSpaces;

          let currentX = x;
          words.forEach((word, i) => {
            doc.text(word, currentX, y);
            const wordWidth = doc.getTextWidth(word);
            currentX += wordWidth + spaceWidth + extraSpace;
          });
        }

        y += lineHeight;
      });
    }

    // Save the PDF
    doc.save(`${profile.name}_CV.pdf`);
  }

  private async getImageBase64(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
