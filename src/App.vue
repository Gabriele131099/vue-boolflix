<template>
  <div id="app">
    <!-- ascoltiamo la chiamata che arriva dal header -->
    <Header @search="searchArrayFilm" />
    
    <!-- qui mandiamo al main sia l'input del utente sia l'array filtrato  -->
    <Main :inputSearch="inputSearch"  :arrayMovies ="filterFilms"/>

  </div>
</template>

<script>
// import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return{
      arrayMovies: [
       {
            "adult": false,
            "backdrop_path": "/poSVFa61vWSCdl6PXthOvoCY6E0.jpg",
            "genre_ids": [
                878,
                28,
                12
            ],
            "id": 13475,
            "original_language": "en",
            "original_title": "Star Trek",
            "overview": "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
            "popularity": 38.009,
            "poster_path": "/9vaRPXj44Q2meHgt3VVfQufiHOJ.jpg",
            "release_date": "2009-05-06",
            "title": "Star Trek",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 7958
        },
        {
            "adult": false,
            "backdrop_path": "/m4F1KRK5jAoQHi2mKDFE2jFKEIb.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 188927,
            "original_language": "en",
            "original_title": "Star Trek Beyond",
            "overview": "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
            "popularity": 41.829,
            "poster_path": "/65NVDW2LnHt2ko3m8ACxFo8E21f.jpg",
            "release_date": "2016-07-07",
            "title": "Star Trek Beyond",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 5364
        },
        {
            "adult": false,
            "backdrop_path": "/6z9w8eidKWDDXwZNSVNaRolAYEP.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 201,
            "original_language": "en",
            "original_title": "Star Trek: Nemesis",
            "overview": "En route to the honeymoon of William Riker to Deanna Troi on her home planet of Betazed, Captain Jean-Luc Picard and the crew of the U.S.S. Enterprise receives word from Starfleet that a coup has resulted in the installation of a new Romulan political leader, Shinzon, who claims to seek peace with the human-backed United Federation of Planets. Once in enemy territory, the captain and his crew make a startling discovery: Shinzon is human, a slave from the Romulan sister planet of Remus, and has a secret, shocking relationship to Picard himself.",
            "popularity": 15.168,
            "poster_path": "/cldAwhvBmOv9jrd3bXWuqRHoXyq.jpg",
            "release_date": "2002-12-13",
            "title": "Star Trek: Nemesis",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 1005
        },
        {
            "adult": false,
            "backdrop_path": "/1aS7a9rwrUh6RuDq2A9VowxE9os.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 54138,
            "original_language": "en",
            "original_title": "Star Trek Into Darkness",
            "overview": "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
            "popularity": 28.545,
            "poster_path": "/7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg",
            "release_date": "2013-05-05",
            "title": "Star Trek Into Darkness",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 7558
        },
        {
            "adult": false,
            "backdrop_path": "/goNk0VDnUjxKjB6o69kYS5vvZo2.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 200,
            "original_language": "en",
            "original_title": "Star Trek: Insurrection",
            "overview": "When an alien race and factions within Starfleet attempt to take over a planet that has \"regenerative\" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet's people as well as the very ideals upon which the Federation itself was founded.",
            "popularity": 13.854,
            "poster_path": "/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg",
            "release_date": "1998-12-11",
            "title": "Star Trek: Insurrection",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 821
        },
        {
            "adult": false,
            "backdrop_path": "/13zoJs9NYW3mtqncZUOucUIVs7r.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 199,
            "original_language": "en",
            "original_title": "Star Trek: First Contact",
            "overview": "The Borg, a relentless race of cyborgs, are on a direct course for Earth. Violating orders to stay away from the battle, Captain Picard and the crew of the newly-commissioned USS Enterprise E pursue the Borg back in time to prevent the invaders from changing Federation history and assimilating the galaxy.",
            "popularity": 16.134,
            "poster_path": "/vrC1lkTktFQ4AqBfqf4PXoDDLcw.jpg",
            "release_date": "1996-11-22",
            "title": "Star Trek: First Contact",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 1271
        },
        {
            "adult": false,
            "backdrop_path": "/aBMLpWsWXPOoTnbK37VKuQA0q0s.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 193,
            "original_language": "en",
            "original_title": "Star Trek: Generations",
            "overview": "Captain Jean-Luc Picard and the crew of the Enterprise-D find themselves at odds with the renegade scientist Soran who is destroying entire star systems. Only one man can help Picard stop Soran's scheme...and he's been dead for seventy-eight years.",
            "popularity": 11.163,
            "poster_path": "/rHsCYDGHFUarGh5k987b0EFU6kC.jpg",
            "release_date": "1994-11-18",
            "title": "Star Trek: Generations",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 932
        },
        {
            "adult": false,
            "backdrop_path": "/oQYpa1TKJRR58IrFGhppi9vL7PC.jpg",
            "genre_ids": [
                878,
                12,
                9648
            ],
            "id": 152,
            "original_language": "en",
            "original_title": "Star Trek: The Motion Picture",
            "overview": "When a destructive space entity is spotted approaching Earth, Admiral Kirk resumes command of the Starship Enterprise in order to intercept, examine, and hopefully stop it.",
            "popularity": 16.288,
            "poster_path": "/ffo56udrkF28ICTv3Xx1S9X6Dw4.jpg",
            "release_date": "1979-12-07",
            "title": "Star Trek: The Motion Picture",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 1193
        },
        {
            "adult": false,
            "backdrop_path": "/wN3dgwkiWSLrMVukPQIeccv5EJ6.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 168,
            "original_language": "en",
            "original_title": "Star Trek IV: The Voyage Home",
            "overview": "It's the 23rd century, and a mysterious alien power is threatening Earth by evaporating the oceans and destroying the atmosphere. In a frantic attempt to save mankind, Kirk and his crew must time travel back to 1986 San Francisco where they find a world of punk, pizza and exact-change buses that are as alien as anything they've ever encountered in the far reaches of the galaxy. A thrilling, action-packed Star Trek adventure!",
            "popularity": 15.586,
            "poster_path": "/xY5TzGXJOB3L9rhZ1MbbPyVlW5J.jpg",
            "release_date": "1986-11-26",
            "title": "Star Trek IV: The Voyage Home",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 1021
        },
        {
            "adult": false,
            "backdrop_path": "/A54JlhiGcfRCamefa7UIam7MmUF.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 172,
            "original_language": "en",
            "original_title": "Star Trek V: The Final Frontier",
            "overview": "The crew of the Federation starship Enterprise is called to Nimbus III, the Planet of Intergalactic Peace. They are to negotiate in a case of kidnapping only to find out that the kidnapper is a relative of Spock. This man is possessed by his life long search for the planet Shaka-Ri which is supposed to be the source of all life. Together they begin to search for this mysterious planet.",
            "popularity": 14.525,
            "poster_path": "/uiXr41VLYsuug3CZbFrKLSNahuZ.jpg",
            "release_date": "1989-06-09",
            "title": "Star Trek V: The Final Frontier",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 822
        },
        {
            "adult": false,
            "backdrop_path": "/z6MKUtBtVOzCX2z6VLXUPxwXOGL.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 174,
            "original_language": "en",
            "original_title": "Star Trek VI: The Undiscovered Country",
            "overview": "After years of war, the Federation and the Klingon empire find themselves on the brink of a peace summit when a Klingon ship is nearly destroyed by an apparent attack from the Enterprise. Both worlds brace for what may be their dealiest encounter.",
            "popularity": 11.09,
            "poster_path": "/tvTOJD7Gz668GLy2nNdLRQvpPsv.jpg",
            "release_date": "1991-12-06",
            "title": "Star Trek VI: The Undiscovered Country",
            "video": false,
            "vote_average": 7,
            "vote_count": 884
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 467903,
            "original_language": "en",
            "original_title": "Star Trek 4",
            "overview": "Plot TBA.",
            "popularity": 4.879,
            "poster_path": null,
            "release_date": "2023-06-09",
            "title": "Star Trek 4",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/o23tzOE3GglpkjYuI0meXbPyAsd.jpg",
            "genre_ids": [
                28,
                12,
                878,
                53
            ],
            "id": 154,
            "original_language": "en",
            "original_title": "Star Trek II: The Wrath of Khan",
            "overview": "It is the 23rd century. The Federation Starship U.S.S. Enterprise is on routine training maneuvers and Admiral James T. Kirk seems resigned to the fact that this inspection may well be the last space mission of his career. But Khan is back. Aided by his exiled band of genetic supermen, Khan - brilliant renegade of 20th century Earth - has raided Space Station Regula One, stolen a top secret device called Project Genesis, wrested control of another Federation Starship and sets out in pursuit of the Enterprise, determined to let nothing stand in the way of his mission: kill Admiral Kirk... even if it means universal Armageddon.",
            "popularity": 9.5,
            "poster_path": "/uPyLsKl8Z0LOoxeaFXsY5MxhR5s.jpg",
            "release_date": "1982-06-04",
            "title": "Star Trek II: The Wrath of Khan",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1363
        },
        {
            "adult": false,
            "backdrop_path": "/5lUpy6OrDhzdeAGBaM1mIsQvfOl.jpg",
            "genre_ids": [
                878,
                28,
                12,
                53
            ],
            "id": 157,
            "original_language": "en",
            "original_title": "Star Trek III: The Search for Spock",
            "overview": "Admiral Kirk and his bridge crew risk their careers stealing the decommissioned Enterprise to return to the restricted Genesis planet to recover Spock's body.",
            "popularity": 9.273,
            "poster_path": "/yqEj0oPfKBMCz7YcCARHDgH7VFm.jpg",
            "release_date": "1984-06-01",
            "title": "Star Trek III: The Search for Spock",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 936
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10402,
                99
            ],
            "id": 53313,
            "original_language": "en",
            "original_title": "Star Trek: 30 Years and Beyond",
            "overview": "A star-studded tribute to Star Trek on its 30th anniversary, hosted by many of the stars and guest stars from all of the Trek series and movies. Also features a huge number of clips from all of the series and movies. At the end, real-life astronauts Aldrin and Jemison present NASA award plaques to the cast members.",
            "popularity": 3.468,
            "poster_path": "/gQ3Bal5BpUcT95Gpu39o4GqnOER.jpg",
            "release_date": "1996-10-06",
            "title": "Star Trek: 30 Years and Beyond",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                878
            ],
            "id": 282759,
            "original_language": "en",
            "original_title": "Star Trek Evolutions",
            "overview": "Star Trek: Evolutions is an 80-minute Paramount Pictures Star Trek documentary compilation which was first released on 22 September 2009 as part of the Star Trek: The Next Generation Motion Picture Collection Blu-ray and DVD sets.",
            "popularity": 1.852,
            "poster_path": "/dgAZHnhcNll9w7iuNOs8tx5cAnB.jpg",
            "release_date": "2009-09-22",
            "title": "Star Trek: Evolutions",
            "video": true,
            "vote_average": 7.3,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                10770,
                99
            ],
            "id": 269768,
            "original_language": "en",
            "original_title": "Star Trek: 25th Anniversary Special",
            "overview": "This documentary is hosted by William Shatner and Leonard Nimoy and they take us through the history of Trek. We also get to see bloopers from the original series and the current space program and how progression has been in reality, hosted by LeVar Burton.",
            "popularity": 3.728,
            "poster_path": "/qifn2LhQThccAg6wR6alv8CoJ3h.jpg",
            "release_date": "1991-09-28",
            "title": "Star Trek: 25th Anniversary Special",
            "video": false,
            "vote_average": 5.5,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": "/71xyy6Ix9g9QV1kpQgCm1lrgtb6.jpg",
            "genre_ids": [
                99
            ],
            "id": 414260,
            "original_language": "en",
            "original_title": "Building Star Trek",
            "overview": "When \"Star Trek\" first aired in 1966, it expanded the viewers' imaginations about what was possible in their lifetimes. Today, many of the space-age technologies displayed on the show, like space shuttles, cell phones, and desktop computers, have already gone from science fiction to science fact. Other innovations, like warp drive, teleportation, and medical tricorders are actively in development. Join us as we celebrate the 50th Anniversary of \"Star Trek\" - a show that continues to inform, enrich, and inspire.",
            "popularity": 2.255,
            "poster_path": "/4jWFApBrTGO4BBbHo3frxFvRRkP.jpg",
            "release_date": "2016-09-04",
            "title": "Building Star Trek",
            "video": false,
            "vote_average": 7,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                878,
                99
            ],
            "id": 451572,
            "original_language": "en",
            "original_title": "Star Trek: Inside the Roddenberry Vault",
            "overview": "Fifty years after the original Star Trek first arrived on television, is there anything about Gene Roddenberry's space opera that hasn't been uncovered? Plenty! On December 13, 2016 fans can experience Star Trek: The Original Series - The Roddenberry Vault, a newly produced multi-part documentary featuring footage from the cutting room floor, long preserved in film canisters by the Roddenberry Estate. The origins of the classic series are explored with new interviews featuring cast and production personnel combined with newly-found deleted scenes, alternate angles, outtakes, behind the scenes moments, and original visual effects elements to tell the definitive story on the making and enduring legacy of Gene Roddenberry's creation.",
            "popularity": 3.307,
            "poster_path": "/7ljtwcMht9hzNguP3NLdGZqke3c.jpg",
            "release_date": "2016-12-05",
            "title": "Star Trek: Inside the Roddenberry Vault",
            "video": false,
            "vote_average": 10,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/3mqFG4eICnwxTp6wpVCnv8iHiOv.jpg",
            "genre_ids": [
                99
            ],
            "id": 411500,
            "original_language": "en",
            "original_title": "50 Years of Star Trek",
            "overview": "Over the last fifty years, America has been fascinated by Star Trek since it first aired in September of 1966. This 2-hour documentary celebrates the 50th anniversary through interviews with cast and crew members from every television series and the original films.",
            "popularity": 1.945,
            "poster_path": "/bdq1ZB3GLkC5ISVNnboledHeX1A.jpg",
            "release_date": "2016-08-14",
            "title": "50 Years of Star Trek",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 13
        }
      ],
      inputSearch: '',
    }
  },
  created() {
    this.searchArrayFilm('')
  },
    computed: {
    filterFilms() {
      function searchIn(search, elements) {
        let exists = false;
        elements.forEach((element) => {
          if(element.toLowerCase().includes(search.toLowerCase())) {
            exists = true;
          }
        });
        return exists;
      }
      if(this.inputSearch.length === 0) {
        return this.arrayMovies
      } 
      return this.arrayMovies.filter((element) => {
        return searchIn(this.inputSearch, [element.title])
      })
    }
  },
  methods: { //si mette in ascolto 
    searchArrayFilm(searchFilm) { // arriva cio che l'utente ha scritto nel input
      this.inputSearch = searchFilm.trim() //trasforma cio che l'utente ha scritto nella nuva stringa!
    }
  }
  // created() {
  //   axios.get('')
  //   .then((result) => {
  //     this.arrayMovies = result.data.results
  //   })
  // },
}
</script>

<style lang="scss">
// importare il nostro scss generico.
@import "./style/app.scss"
</style>