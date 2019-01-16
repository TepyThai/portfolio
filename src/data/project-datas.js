import {
  ReactLogo,
  GraphqlLogo,
  RebassLogo,
  GatsbyLogo,
  JavaLogo,
  TheMovieDBLogo,
  SquareLogo,
} from '../images/logos'

export const projectDatas = [
  {
    projectName: 'This website',
    logoPaths: [ReactLogo, GraphqlLogo, RebassLogo, GatsbyLogo],
    imagePathName: 'portfolioSiteBg',
    detailLink: '/blog/how-i-build-portfolio-site-with-gatsby',
    descriptions: [
      {
        logoSrc: ReactLogo,
        text: ' React : As UI builder',
      },
      {
        logoSrc: GraphqlLogo,
        text: ' GraphQL : As data layer',
      },
      {
        logoSrc: GatsbyLogo,
        text: ' Gatsby : As static site generator (blazing fast 🔥🔥)',
      },
      {
        logoSrc: RebassLogo,
        text: ' Rebass : As fundamental UI component',
      },
    ],
  },
  {
    projectName: 'PopularMovie',
    logoPaths: [JavaLogo, TheMovieDBLogo, SquareLogo, SquareLogo],
    imagePathName: 'projectCardBg2',
    detailLink: '/blog/how-i-build-udacity-popular-movie-project-android/',
    descriptions: [
      {
        logoSrc: JavaLogo,
        text: ' Java : As main language',
      },
      {
        logoSrc: TheMovieDBLogo,
        text: ' TheMovieDB API : As API data',
      },
      {
        logoSrc: SquareLogo,
        text: ' Picasso : As image fetching and catching library',
      },
      {
        logoSrc: SquareLogo,
        text: ' Retrofit 2 : As type-safe HTTP client',
      },
    ],
  },
]
