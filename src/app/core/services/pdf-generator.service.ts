import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Profile } from '../interfaces/profile.interface';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {


async generatePDF(profile: Profile, skills: Skill[], template: any) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const leftMargin = 20;
  const rightMargin = 20;
  const maxWidth = pageWidth - leftMargin - rightMargin;
  const bottomMargin = 20; // Space at bottom before new page
  let currentY = 20; // Start position for content

  // Function to check if we need a new page
 const checkForNewPage = (requiredSpace: number): boolean => {
  if (currentY + requiredSpace > pageHeight - bottomMargin) {
    doc.addPage();
    currentY = 20;
    return true;
  }
  return false;
};

  // NAME
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text(capitalize(profile.name), leftMargin, currentY);
  currentY += 10;

  // JOB
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(profile.title.toUpperCase(), leftMargin, currentY);
  currentY += 8;

  // CONTACT INFO
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`${profile.email} | ${profile.phone} | ${profile.location}`, leftMargin, currentY);
  currentY += 10;

  //PROFILE SECTION
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(capitalize(template.c_profile), leftMargin, currentY);
  currentY += 5;

  // PROFILE
  const profileText = doc.splitTextToSize(profile.about + profile.about_2, maxWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(profileText, leftMargin, currentY);
  currentY += profileText.length * 3 + 10;

  // WORK EXPERIENCE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(capitalize(template.c_experience), leftMargin, currentY);
  currentY += 10;
  
  // WORK EXPERIENCE ITEMS
  profile.work_exp.forEach((exp) => {
  const content = `${exp.year} | ${exp.company}\n${exp.resposabilities.replace(/<br>/g, '\n')}`;
  const lines = doc.splitTextToSize(content, maxWidth);
  const requiredSpace = lines.length * 6 + 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(`${exp.year} | ${exp.company}`, leftMargin, currentY);
  currentY += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.text(lines.slice(1), leftMargin, currentY);
  currentY += (lines.length - 1) * 6 + 10;
  checkForNewPage(requiredSpace); 
});


  // EDUCATION
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(capitalize(template.c_education), leftMargin, currentY);
  currentY += 10;
  
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(profile.education, leftMargin, currentY);
  currentY += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(capitalize(profile.degree), leftMargin, currentY);
  currentY += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(capitalize(profile.bachelorsDegree), leftMargin, currentY);
  currentY += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(capitalize(template.c_skills), leftMargin, currentY);
  currentY += 10;

   skills.forEach((skill) => {
    doc.setFont('helvetica', 'normal');
    doc.text(`• ${skill.name}`, leftMargin, currentY);
    currentY += 10;
  });

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text(capitalize(template.c_languages), leftMargin, currentY);
  currentY += 10;

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(capitalize(profile.languages), leftMargin, currentY);
  currentY += 10;


  // Save the PDF
  doc.save(`${profile.name}_CV.pdf`);
}
}

function capitalize(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(word =>
      word.length > 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : ''
    )
    .join(' ');
}
