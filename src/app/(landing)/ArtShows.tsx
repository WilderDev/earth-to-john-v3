// * Imports
import Image from 'next/image';
import { IArtShow } from '@/assets/typescript/ui';

// * Images
import ArtInTheParkElmhurst from '@/assets/images/shows/art-in-wilder-park-26th-annual.jpg';
import FineArtShowStCharles from '@/assets/images/shows/fine-art-show.jpeg';
import ArtFestivalDeerfield from '@/assets/images/shows/deerfield-art-festival.jpeg';
import GoldCoastArtFairGrantPark from '@/assets/images/shows/gold-coast-art-fair.jpeg';
import ArtFairBurrRidge from '@/assets/images/shows/burr-ridge-art-fair.jpeg';
import FestivalOfArtGlencoe from '@/assets/images/shows/glencoe-festival-of-art.jpeg';
import ArtAtTheGlenGlenview from '@/assets/images/shows/art-at-the-glen.jpeg';
import ArtFairWilmette from '@/assets/images/shows/wilmette-art-fair.jpeg';
import ArtAndBigForkFestivalEvanston from '@/assets/images/shows/art-and-big-fork-festival.jpeg';
import PortClintonArtFestivalHighlandPark from '@/assets/images/shows/port-clinton-art-festival.jpeg';

// * Data
const artShows: IArtShow[] = [
  // 1. Art in the park (Elmhurst) - May 6th & 7th, 2023
  {
    name: 'Art In The Park',
    description:
      'Save the date for the 26th Annual Art in Wilder Park, a free-admission, two-day outdoor event featuring over 100 artists from the Midwest, to be held on May 6th and 7th, 2023, produced by the Elmhurst Art Museum in partnership with the Elmhurst Park District, and sponsored by Kelly Stetler | Compass.',
    startDate: 'May 6th, 2023',
    endDate: 'May 7th, 2023',
    location: 'Elmhurst, IL',
    website: 'https://www.rglmarketingforthearts.com/art-in-wilder-park.php',
    imageSrc: ArtInTheParkElmhurst,
  },
  // 2. Fine Art Show (St. Charles) - May 27th & 28th, 2023
  {
    name: 'Fine Art Show',
    description:
      'The 26th Annual St. Charles Fine Art Show presented by St. Charles Chrysler Dodge Jeep Ram showcases the original, juried work of over 100 fine artists in mediums including Clay/Ceramics, Digital Art, Drawing/Illustration, and more.',
    startDate: 'May 27th, 2023',
    endDate: 'May 28th, 2023',
    location: 'St. Charles, IL',
    website: 'https://www.stcharlesfineartshow.com/',
    imageSrc: FineArtShowStCharles,
  },
  // 3. Art Festival (Deerfield) - June 3rd & 4th, 2023
  {
    name: 'Art Festival',
    description:
      'The Deerfield Art Festival is filling Park Avenue with 80+ original artists on June 3-4!',
    startDate: 'June 3rd, 2023',
    endDate: 'June 4th, 2023',
    location: 'Deerfield, IL',
    website: 'https://amdurproductions.com/event/2023-deerfield-art-festival/',
    imageSrc: ArtFestivalDeerfield,
  },
  // 4. Gold Coast Art Fair (Grant Park) - June 17th & 18th, 2023
  {
    name: 'Gold Coast Art Fair',
    description:
      'Join us in celebrating 65 years of a Chicago tradition, the Gold Coast Art Fair, June 17 & 18 in Chicago’s Grant Park.',
    startDate: 'June 17th, 2023',
    endDate: 'June 18th, 2023',
    location: 'Grant Park, IL',
    website: 'https://amdurproductions.com/event/2023-gold-coast-art-fair/',
    imageSrc: GoldCoastArtFairGrantPark,
  },
  // 5. Art Fair (Burr Ridge) - June 24th & 25th, 2023
  {
    name: 'Art Fair',
    description:
      'Burr Ridge Village Center plays host to a perfect summer day! Start with breakfast at the Center then begin browsing through paintings, sculpture, photographs, jewelry and more from 100+ artists.',
    startDate: 'June 24th, 2023',
    endDate: 'June 25th, 2023',
    location: 'Burr Ridge, IL',
    website: 'https://amdurproductions.com/event/2023-burr-ridge-art-fair/',
    imageSrc: ArtFairBurrRidge,
  },
  // 6. Festival of Art (Glencoe) - July 22nd & 23rd, 2023
  {
    name: 'Festival of Art',
    description:
      'Set in Glencoe’s prestigious and historic downtown, just blocks from Lake Michigan on Chicago’s magnificent North Shore, the 14th annual Glencoe Festival of Art takes place on July 22 and 23. The festival, which covers Glencoe’s downtown, features more than 120 juried artists showing and selling paintings, sculpture, ceramics, glass, jewelry and more! Family-friendly (and dog-friendly, too!), there are activities just for kids and live artist demonstrations, as well as non-stop live music along with restaurants and cafes on the festival route offering delicious meals and tasty treats.',
    startDate: 'July 22nd, 2023',
    endDate: 'July 23rd, 2023',
    location: 'Glencoe, IL',
    website: 'https://amdurproductions.com/event/2023-glencoe-festival-of-art/',
    imageSrc: FestivalOfArtGlencoe,
  },
  // 7. Art at the Glen (Glenview) - July 29th & 30th, 2023
  {
    name: 'Art at the Glen',
    description:
      'Glenview’s spectacular Glen Town Center is home to the 20th annual Art at the Glen on July 29 and 30. More than 175 juried artists from near and far will showcase and sell their one-of-a-kind pieces in a variety of mediums including painting, photography, ceramics, furniture, jewelry, wood, fiber and more!',
    startDate: 'July 29th, 2023',
    endDate: 'July 30th, 2023',
    location: 'Glenview, IL',
    website: 'https://amdurproductions.com/event/2023-art-at-the-glen/',
    imageSrc: ArtAtTheGlenGlenview,
  },
  // 8. Art Fair (Wilmette) - August 5th & 6th, 2023
  //   {
  //     name: 'Art Fair',
  //     description:
  //       'Amdur Productions proudly announces the launch of the Annual Wilmette Art Fair.  The Wilmette Art Fair takes place in the lovely, bustling North Shore community of Wilmette, Illinois on the shore of Lake Michigan, just 14 miles north of Chicago.',
  //     startDate: 'August 5th, 2023',
  //     endDate: 'August 6th, 2023',
  //     location: 'Wilmette, IL',
  //     website: 'https://amdurproductions.com/event/2023-wilmette-art-festival/',
  //     imageSrc: ArtFairWilmette, // https://amdurproductions.com/wilmette-art-festival-artist-info/
  //   },
  // 9. Art & Big Fork Festival (Evanston) - August 18th - 20th, 2023
  {
    name: 'Art & Big Fork Festival',
    description:
      'Downtown Evanston transforms itself into an incredible showcase of all types of original art when the Evanston Art & Big Fork Fest opens for a three day show on Friday, Saturday and Sunday, August 18, 19 and 20. Located on Sherman and Church Streets, in the heart of one of the North Shore’s magnificent lakefront communities, more than 150 juried artists from around the country will show and sell their art including paintings, jewelry, mixed media, photography, sculpture, ceramics, one-of-a-kind furniture, home accessories and more!',
    startDate: 'August 18th, 2023',
    endDate: 'August 20th, 2023',
    location: 'Evanston, IL',
    website:
      'https://amdurproductions.com/event/2023-evanston-art-and-big-fork/',
    imageSrc: ArtAndBigForkFestivalEvanston,
  },
  // 10. Port Clinton Art Festival (Highland Park) - August 26th & 27th, 2023
  {
    name: 'Port Clinton Art Festival',
    description:
      'The 40th Annual Port Clinton Art Festival, produced by Highland Park-based company Amdur Productions, returns to downtown Highland Park, Illinois.  The outdoor art festival is rated as one of the top shows by Art Fair Calendar.',
    startDate: 'August 26th, 2023',
    endDate: 'August 27th, 2023',
    location: 'Highland Park, IL',
    website:
      'https://amdurproductions.com/event/2023-port-clinton-art-festival/',
    imageSrc: PortClintonArtFestivalHighlandPark,
  },
  // 11. Art Fair on the Square (Lake Forest) - September 3rd & 4th, 2023
  //   {
  //     name: 'Art Fair on the Square',
  //     description: '',
  //     startDate: 'September 3rd, 2023',
  //     endDate: 'September 4th, 2023',
  //     location: 'Lake Forest, IL',
  //     website: '',
  //     imageSrc: ArtFairOnTheSquareLakeForest,
  //   },
  // 12. Art on the Fox (Algonquin) - September 9th & 10th, 2023
  //   {
  //     name: 'Art on the Fox',
  //     description: '',
  //     startDate: 'September 9th, 2023',
  //     endDate: 'September 10th, 2023',
  //     location: 'Algonquin, IL',
  //     website: '',
  //     imageSrc: ArtOnTheFoxAlgonquin,
  //   },
  // 13. Art Show (Deer Park) - September 16th & 17th, 2023
  //   {
  //     name: 'Art Show',
  //     description: '',
  //     startDate: 'September 16th, 2023',
  //     endDate: 'September 17th, 2023',
  //     location: 'Deer Park, IL',
  //     website: '',
  //     imageSrc: ArtShowDeerPark,
  //   },
  // 14. Art in the Barn (Barrington) - September 23rd & 24th, 2023
  //   {
  //     name: 'Art in the Barn',
  //     description: '',
  //     startDate: 'September 23rd, 2023',
  //     endDate: 'September 24th, 2023',
  //     location: 'Barrington, IL',
  //     website: '',
  //     imageSrc: ArtInTheBarnBarrington,
  //   },
];

// * Component
export default function LandingArtShows() {
  // * Render
  return (
    <section id="art-shows" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl font-serif">
            Featured in Premier Art Shows in 2023
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            John&apos;s work will be featured in the following 14 art shows this
            year. If you&apos;re in the area, stop by and say hello!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {artShows.map(
            ({ name, location, startDate, endDate, website, imageSrc }) => (
              <li key={name}>
                <a
                  className="group"
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Image */}
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover opacity-90 group-hover:opacity-100 shadow-lg group-hover:shadow-2xl transition-all duration-300 ease-in-out"
                    src={imageSrc}
                    alt={name}
                  />

                  {/* Name */}
                  <h3 className="mt-6 text-lg md:text-xl font-semibold leading-8 tracking-tight text-stone-900">
                    {name}
                  </h3>

                  {/* Location */}
                  <span className="text-base leading-7 text-stone-600 block">
                    {location}
                  </span>

                  {/* Dates */}
                  <span className="text-base leading-7 text-stone-600 block">
                    {startDate} - {endDate}
                  </span>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

// TSK: View Full Calendar (Printout)
// TSK: Add future shows when they are ready
