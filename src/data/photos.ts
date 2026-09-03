import hero from '../assets/hero.jpg';
import aboutTeam from '../assets/about-us-team.jpg';
import before from '../assets/before.jpg';
import after from '../assets/after.jpg';
import decluttering from '../assets/decluttering.jpg';
import downsizingEstates from '../assets/downsizing-estates.jpg';
import preMovePacking from '../assets/pre-move-packing.jpg';
import homeStaging from '../assets/home-staging.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export const photos = { hero, aboutTeam, before, after };

export const servicePhotos: Record<string, Photo> = {
  decluttering: {
    src: decluttering,
    alt: 'A cupboard sorted into neat, labelled sections with everything easy to reach.',
  },
  'downsizing-estates': {
    src: downsizingEstates,
    alt: 'Belongings carefully grouped and boxed during a downsizing move.',
  },
  'pre-move-packing': {
    src: preMovePacking,
    alt: 'Packed and labelled moving boxes stacked ready for moving day.',
  },
  'home-staging': {
    src: homeStaging,
    alt: 'A living room styled for sale - uncluttered, light and welcoming.',
  },
};
