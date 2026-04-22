import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-cover-letter-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cover-letter-generator.component.html',
  styleUrl: './cover-letter-generator.component.scss',
})
export class CoverLetterGeneratorComponent {
  isEnglish = false;
  generatedLetter: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      recruiterName: ['', Validators.required],
      projectName: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  generate() {
    if (this.form.valid) {
      const { recruiterName, projectName, companyName } = this.form.value;

      // Ahora generate solo decide qué template usar
      this.generatedLetter = this.isEnglish
        ? this.getEnglishTemplate(recruiterName, projectName, companyName)
        : this.getSpanishTemplate(recruiterName, projectName, companyName);
    }
  }

  private getEnglishTemplate(
    recruiter: string,
    project: string,
    company: string,
  ): string {
    return `Subject: Senior Software Engineer | Angular & NestJS Specialist | Guillermo Morán

Hi ${recruiter},

I am writing to express my interest in the ${project} position at ${company}. I have been closely following your work in the software industry, and I believe my profile aligns perfectly with your current goals.

Currently, I work at 3Pillar Global, where I specialize in:

• Scalable Architectures: Developing microservices and SPAs with Angular, Node.js, and NestJS.
• Automation & DevOps: Creating ChatOps tools (Slack bots) and Python scripts that have improved manual processes.
• Technical Leadership: Collaborating with international teams to deliver critical systems with high availability.

I would welcome the opportunity to discuss how my experience optimizing delivery cycles and developing robust software can add value to your engineering team from day one.

You can download my CV and visit my portfolio: https://oh-my-portfolio.netlify.app/

Best regards,

Guillermo Morán L.
+52 614 303 8485`;
  }

  private getSpanishTemplate(
    recruiter: string,
    project: string,
    company: string,
  ): string {
    return `Asunto: Senior Software Engineer | Angular & NestJS Specialist | Guillermo Morán

Hola ${recruiter},

Te contacto porque tengo gran interés en la posición de ${project} en ${company}. He seguido de cerca su trabajo en el sector tecnológico y creo que mi perfil encaja perfectamente con sus objetivos actuales.

Actualmente trabajo en 3Pillar Global, donde me especializo en:

• Arquitecturas Escalables: Desarrollo de microservicios y SPAs con Angular, Node.js y NestJS.
• Automatización y DevOps: Creación de herramientas de ChatOps (Slack bots) y scripts en Python que han mejorado procesos manuales.
• Liderazgo Técnico: Colaboración en equipos internacionales para entregar sistemas críticos con alta disponibilidad.

Me gustaría platicar sobre cómo mi experiencia optimizando ciclos de entrega y desarrollando software robusto puede agregar valor a su equipo de ingeniería desde el primer día.

Puedes descargar mi CV y visitar mi portfolio: https://oh-my-portfolio.netlify.app/

Saludos cordiales,

Guillermo Morán L.
+52 614 303 8485`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedLetter);
    alert('¡Texto copiado!');
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    if (this.generatedLetter) {
      this.generate();
    }
  }

  downloadPDF() {
    const today = new Date().toLocaleDateString(
      this.isEnglish ? 'en-US' : 'es-MX',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    );

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - margin * 2;
    let cursorY = 20; // Empezamos en 20 para la fecha

    // --- NUEVO: RENDERIZAR LA FECHA ---
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Gris más suave para la fecha
    // Alineación a la derecha
    doc.text(today, pageWidth - margin, cursorY, { align: 'right' });

    cursorY += 10; // Bajamos el cursor para el asunto

    // 1. Renderizar el Asunto
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Volvemos a negro para el título

    const lines = this.generatedLetter.split('\n');
    const subject = lines[0];
    const body = lines.slice(1).join('\n');

    doc.text(subject, margin, cursorY);

    // 2. Agregar Línea Horizontal
    cursorY += 4;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, cursorY, pageWidth - margin, cursorY);

    // 3. Renderizar el Cuerpo
    cursorY += 12;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);

    const splitBody = doc.splitTextToSize(body, contentWidth);
    doc.text(splitBody, margin, cursorY);

    const sanitizedCompany = this.form.value.companyName.replace(
      /[^a-z0-9]/gi,
      '_',
    );
    doc.save(`Cover_Letter_Guillermo_Moran_${sanitizedCompany}.pdf`);
  }
}
