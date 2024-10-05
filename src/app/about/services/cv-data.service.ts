import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvDataService {
  getCvData() {
    return {
      personal_info: {
        name: 'Ishwar Katwe',
        title: 'Web Development & Technology Expert | 10+ Years of Experience',
        location: 'Bengaluru, Karnataka, India',
        email: 'ishwar.katwe0816@@gmail.com',
        phone: '+91 9632463245',
        linkedin: 'https://linkedin.com/in/ishwar.katwe0816',
        github: 'https://github.com/ishwar.katwe0816',
      },
      professional_summary:
        'Innovative and results-driven Senior Software Engineer with over 10 years of experience in web development, specializing in Angular, React, JavaScript, TypeScript, RxJS, Node.js, and NestJS. Proven track record of empowering digital transformations, solving complex challenges, and delivering exceptional user experiences. Passionate about leveraging technology to drive innovation and achieve business goals. Open to new and exciting opportunities in tech.',
      core_competencies: [
        'Angular (4+ to 18)',
        'React',
        'TypeScript',
        'Node.js',
        'NestJS',
      ],
      professional_experience: [
        {
          company: 'OneTrust',
          title: 'Senior Software Engineer',
          location: 'Bengaluru, Karnataka, India',
          dates: 'September 2021 – Present',
          responsibilities: [
            'Working on GRC module for privacy, policy'
          ],
        },
        // Add other experiences similarly
      ],
      education: [
        {
          institution: 'SKSVMACET',
          degree: 'B.E., Computer Science',
          dates: '2010 – 2013',
        },
        // Add more education records
      ],
      certifications: [
        'Advanced JavaScript and TypeScript Mastery',
        // Add other certifications
      ],
      projects_achievements: [
        {
          title: 'Data Privacy Module',
          description:
            'Built and deployed a comprehensive data privacy management system...',
        },
        // Add other achievements
      ],
      open_to_opportunities:
        'Ready to leverage my skills and experience in new and exciting roles...',
    };
  }
}
