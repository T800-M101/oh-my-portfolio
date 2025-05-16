import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Profile } from '../interfaces/profile.interface';
import { Skill } from '../interfaces/skill.interface';


@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  async generatePDF(profile: Profile, skills: Skill[], template: any) {
    const doc = new jsPDF();
  
    const blueBarHeight = 40;
  
    // Draw top blue bar
    doc.setFillColor(52, 152, 219); // Bootstrap blue
    doc.rect(0, 10, 210, blueBarHeight, 'F');
  
    // Optional: Add profile image inside the top bar
    try {
      const base64Image = await this.getImageBase64(profile.photo_3);
      doc.addImage(base64Image, 'JPEG', 15, 15, 30, 30); // fits within blue bar
    } catch (err) {
      console.error('Image load error:', err);
    }
  
    // Add name and title in white text inside the top bar
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(profile.name, 100, 25);
  
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(profile.title, 103, 35);
  
    // Reset for body text
    let y = blueBarHeight + 20;
    doc.setTextColor(0, 0, 0);
  
    // About section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(template.about_me, 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const introLines = doc.splitTextToSize(profile.about, 170);
    doc.text(introLines, 20, y);
    y += introLines.length * 6 + 6;
  
    // Divider line
    doc.setDrawColor(180);
    doc.line(20, y, 190, y);
    y += 8;
  
    // Skills section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(template.skills, 20, y);
    y += 10;
  
    doc.setFontSize(11);
    skills.forEach(skill => {
      doc.setFont('helvetica', 'bold');
      doc.text(`• ${skill.name}`, 25, y);
      y += 6;
  
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(skill.description, 160);
      doc.text(lines, 30, y);
      y += lines.length * 6 + 4;
    });
  
    // Bottom blue footer bar
    const footerBarHeight = 10;
    const pageHeight = doc.internal.pageSize.getHeight();
    const footerBarY = pageHeight - footerBarHeight - 5;
  
    doc.setFillColor(52, 152, 219);
    doc.rect(0, footerBarY, 210, footerBarHeight, 'F');
  
    // Add white contact info text in footer
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text(
      `${this.toTitleCase(template.email)}: ${profile.email} | ${template.portfolio}: ${profile.email}`,
      60,
      footerBarY + 6
    );
  
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

  toTitleCase(str: string) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
    
}


