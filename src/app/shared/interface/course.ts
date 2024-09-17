import { Section } from './section';
import { AboutMe } from './about-me';
export interface Courses {
  id: string;
  title: string;
  description: string;
  Categoryid: number;
  Userid: number;
  sections: Section[];
  aboutMe: AboutMe[];
}
