import initSkill from "./modules/skill.js";
import initProjects from "./modules/projects.js";
import initMenumobile from "./modules/mobileMenu.js";
import initCarousel from "./modules/carousel.js";
import SlideNav from "./modules/slide.js";
import initTheme from "./modules/theme.js";

initSkill();
initProjects();
initMenumobile();
initTheme();

initCarousel().then(() => {
  const slide = new SlideNav('.slide', '.slide-wrapper');
  slide.init();
  slide.addControl('.custom-controls');
});