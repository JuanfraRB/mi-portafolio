import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/cv-juan-francisco.pdf';
  link.download = 'CV_Juan_Francisco_Rodriguez.pdf';
  link.click();
}

}
