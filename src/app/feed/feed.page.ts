import { Component, OnInit } from '@angular/core';

const data = [
{
  id: '1',
  title: 'A History of the Great Wild West of America',
  subtitle: 'The story of Chicago and its hinterland',
  published: {
    month: 'March',
    day: '6',
    year: '2017'
  },
  thumbnail: 'http://www.szirine.com/wpmain/uploads/2017/03/Ferris-wheel-1893-768x568.jpg',
  text: 'The story of Chicago and its hinterland is one of the wildest histories of socio-economic growth you will encounter. In our time perhaps only comparable with the rapid growth of the Chinese economy and population.'
},
{
  id: '2',
  title: 'Anne Dunn',
  subtitle: 'Anne Dunn (born 1929) is an English artist of the second School of London.',
  published: {
    month: 'Feb',
    day: '7',
    year: '2016'
  },
  thumbnail: 'http://www.szirine.com/wpmain/uploads/2016/02/Screen-Shot-2016-02-07-at-15.45.39.png',
  text: 'Anne Dunn\'s paintings seem to explore the middle zones: Between being and not being, between beauty and decay. Fruit and Swallow (1956) depicts bright sliced fruit beside a dead blue swallow. Vines After Rain (1959) explores a half seen landscape, abstracted, colourful and suggestive of movement.'
},
{
  id: '3',
  title: 'Can neuroscience help us understand Art?',
  subtitle: 'A debate between Gabrielle Starr and Alva Noe at NYU\'s Case Italiana.',
  published: {
    month: 'Dec',
    day: '13',
    year: '2015'
  },
  thumbnail: 'http://www.szirine.com/wpmain/uploads/2015/12/fnhum-06-00066-g006.jpg',
  text: 'One of my favorite garage punk songs by English artists is the Headcoats\' \'Art or Arse\' with Billy Childish (from Tracey Emin). It raises the question of all times, \'What is Art?\'. To answer this, one could look at the neural activity during an aesthetic experience. At NYU\'s Casa Italiana, Gabrielle Starr and Alva Noe debate the role of neuroscience.'
}
];

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})

export class FeedPage implements OnInit {
  articles: any = [];

  constructor() {}

  ngOnInit() {
    this.articles = data;
  }
  
  openArticle(index: number) {
    console.log('TODO');
  }
}