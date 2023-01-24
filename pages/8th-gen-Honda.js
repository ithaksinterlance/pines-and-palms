import React from 'react';
import Image from 'next/image';
import ABS from '../public/img/honda-eighth-gen/abs.jpg';
import AirFilter from '../public/img/honda-eighth-gen/air_filter.jpg';
import AirSuspension from '../public/img/honda-eighth-gen/air_suspension.jpg';
import AxleAssembly from '../public/img/honda-eighth-gen/axle_assembly.jpg';
import BrakePads from '../public/img/honda-eighth-gen/brake_pads.jpg';
import Carburetor from '../public/img/honda-eighth-gen/carburetor.jpg';
import CatalyticConverter from '../public/img/honda-eighth-gen/catalytic_converter.jpg';
import CylinderHead from '../public/img/honda-eighth-gen/cylinder_head.jpg';
import Distributor from '../public/img/honda-eighth-gen/distributor.jpg';
import Engine from '../public/img/honda-eighth-gen/engine.jpg';
import ExhaustManifold from '../public/img/honda-eighth-gen/exhaust_manifold.jpg';
import GearBox from '../public/img/honda-eighth-gen/gearbox.jpg';
import Grille from '../public/img/honda-eighth-gen/grille.jpg';
import Headlight from '../public/img/honda-eighth-gen/headlight.jpg';
import MasterCylinderKit from '../public/img/honda-eighth-gen/master_cylinder_kit.jpg';
import Radiator from '../public/img/honda-eighth-gen/radiator.jpg';
import RearBumper from '../public/img/honda-eighth-gen/rear_bumper.jpg';
import ReverseLight from '../public/img/honda-eighth-gen/reverse_light.jpg';
import Rim from '../public/img/honda-eighth-gen/rim.jpg';
import SeatBelt from '../public/img/honda-eighth-gen/seat_belt.jpg';
import ShockAbsorber from '../public/img/honda-eighth-gen/shock_absorber.jpg';
import SideMirror from '../public/img/honda-eighth-gen/side_mirror.jpg';
import SteeringWheel from '../public/img/honda-eighth-gen/steering_wheel.jpg';
import Wheel from '../public/img/honda-eighth-gen/wheel.jpg';
import MudFlap from '../public/img/honda-eighth-gen/mud_flap.jpg';

export default function Honda() {
  const images = [
    {
      images: ABS,
      name: 'Anti Lock Braking System (ABS)',
      alt: 'honda accord abs',
      link:
        'https://emirates-car.com/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)'
    },
    {
      images: AirFilter,
      name: 'Air Filter',
      alt: 'honda accord air filter',
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AirSuspension,
      name: 'Air Suspension',
      alt: 'honda accord air suspension',
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AxleAssembly,
      name: 'Axle',
      alt: 'honda accord axle',
      link:
        'https://emirates-car.com/search-by-part-name/Axle%20Assembly%20(Front,%204WD)'
    },
    {
      images: BrakePads,
      name: 'Brake Pads',
      alt: 'honda accord brake pads',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: Carburetor,
      name: 'Carburetor',
      alt: 'honda accord carburetor',
      link: 'https://emirates-car.com/search-by-part-name/Carburetor'
    },
    {
      images: CatalyticConverter,
      name: 'Catalytic Convertor',
      alt: 'honda accord catalytic convertor',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CylinderHead,
      name: 'Cylinder Head',
      alt: 'honda accord cylinder',
      link: 'https://emirates-car.com/search-by-part-name/Cylinder%20Head)'
    },
    {
      images: Distributor,
      name: 'Distributor',
      alt: 'honda accord distributor',
      link: 'https://emirates-car.com/search-by-part-name/Distributor'
    },
    {
      images: Engine,
      name: 'Engine',
      alt: 'honda accord engine',
      link: 'https://emirates-car.com/search-by-part-name/Engine%20Assembly'
    },
    {
      images: ExhaustManifold,
      name: 'Exhaust Manifold',
      alt: 'honda accord exhaust system',
      link: 'https://emirates-car.com/search-by-part-name/Exhaust%20Manifold'
    },
    {
      images: GearBox,
      name: 'Gearbox / Transmission',
      alt: 'honda accord gearbox',
      link:
        'https://emirates-car.com/search-by-part-name/Transmission%20Control%20Module'
    },
    {
      images: Grille,
      name: 'Grille',
      alt: 'honda accord grill',
      link: 'https://emirates-car.com/search-by-part-name/Grille'
    },
    {
      images: Headlight,
      name: 'Headlight',
      alt: 'honda accord headlight bulb',
      link: 'https://emirates-car.com/search-by-part-name/Headlight%20Assembly'
    },
    {
      images: MasterCylinderKit,
      name: 'Master Cylinder',
      alt: 'honda accord master cylinder',
      link:
        'https://emirates-car.com/search-by-part-name/Master%20Cylinder%20(Clutch)'
    },
    {
      images: MudFlap,
      name: 'Mud Flap',
      alt: 'honda accord mud flaps',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: Radiator,
      name: 'Radiator',
      alt: 'honda accord radiator',
      link: 'https://emirates-car.com/search-by-part-name/Radiator'
    },
    {
      images: RearBumper,
      name: 'Rear Bumper',
      alt: 'honda accord rear bumper',
      link:
        'https://emirates-car.com/search-by-part-name/Bumper%20Assembly%20(Rear)'
    },
    {
      images: ReverseLight,
      name: 'Reverse Light',
      alt: 'honda accord reverse light bulb',
      link: 'https://emirates-car.com/search-by-part-name/Reverse%20Light'
    },
    {
      images: Rim,
      name: 'Rims',
      alt: 'honda accord rims for sale',
      link: 'https://emirates-car.com/search-by-part-name/Rim'
    },
    {
      images: SeatBelt,
      name: 'Seat Belt',
      alt: 'honda accord seat belt',
      link: 'https://emirates-car.com/search-by-part-name/Seat%20Belt'
    },
    {
      images: ShockAbsorber,
      name: 'Shock Absorber',
      alt: 'honda accord shock absorber',
      link: 'https://emirates-car.com/search-by-part-name/Shock%20Absorber'
    },
    {
      images: SideMirror,
      name: 'Mirror',
      alt: 'honda accord mirrors',
      link:
        'https://emirates-car.com/search-by-part-name/Mirror%20(Rear%20View)'
    },
    {
      images: SteeringWheel,
      name: 'Steering Wheel',
      alt: 'honda accord steering wheel',
      link: 'https://emirates-car.com/search-by-part-name/Steering%20Wheel'
    },
    {
      images: Wheel,
      name: 'Wheels',
      alt: 'honda accord wheels',
      link: 'https://emirates-car.com/search-by-part-name/Wheel'
    }
  ];

  return (
    <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
      {images.map(i => (
        <div key={i.name} className="border-2 p-5 relative">
          <sup className="absolute top-0 right-0 text-sm font-bold text-white bg-red-600 rounded-l-xl rounded-r-xl p-1">
            Sale!
          </sup>
          <h6>Honda accord {i.name}</h6>
          <hr className="py-1" />
          <Image
            src={i.images}
            alt={i.alt}
            height={250}
            width={250}
            quality={75}
            blurDataURL={i.images}
            placeholder="blur"
          />
          <a
            href={i.link}
            title={'Honda accord ' + i.name}
            className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
          >
            Inquire Now
          </a>
        </div>
      ))}
    </div>
  );
}
