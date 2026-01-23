interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Developing artificial intelligence tools for all',
    description: `MIT Quest for Intelligence-sponsored undergraduate research projects demystify AI.`,
    imgSrc: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201905/6%2520portraits_0.jpg?itok=Nb4oXqLM',
    href: 'https://news.mit.edu/2019/students-developing-ai-tools-all-0523',
  },
  {
    title: 'Deep-learning technique predicts clinical treatment outcomes',
    description: `G-Net allows physicians to explore the outcomes of different treatment options for ICU patients based on their treatment and medical history.`,
    imgSrc: 'https://www.eecs.mit.edu/wp-content/uploads/2022/03/heart-hologram-and-doctor-heart-disease-health-care-of-the-future-picture-id1224958652-1.jpg',
    href: 'https://www.eecs.mit.edu/deep-learning-technique-predicts-clinical-treatment-outcomes/',
  },
  {
    title: 'Meet the 2017 Pathfinder Winners',
    description: ``,
    imgSrc: 'https://www.gannett-cdn.com/gannett-web/properties/palmbeachpost/logos-and-branding/logo-default.svg',
    href: 'https://www.palmbeachpost.com/picture-gallery/news/local/2017/05/18/meet-the-2017-pathfinder-winners/65582216007/',
  },
  {
    title: 'SEMIFINALISTS IN THE 2017 NATIONAL MERIT® SCHOLARSHIP PROGRAM',
    description: `Florida high school seniors who qualified as Semifinalists in the 62nd annual National Merit Scholarship Program, representing the top 1% of seniors in the state based on PSAT/NMSQT® scores.`,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/National_Merit_Scholarship_Corporation_logo.svg/2560px-National_Merit_Scholarship_Corporation_logo.svg.png',
    href: 'https://www.fldoe.org/core/fileparse.php/5673/urlt/17NatlMeritSemi.pdf',
  },
]

export default projectsData
