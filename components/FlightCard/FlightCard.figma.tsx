/**
 * Figma Code Connect — FlightCard (Flights/Card/Estructura)
 * Figma node: 2863:31139 / 4120:28489
 */
import figma from '@figma/code-connect';
import { FlightCard } from './FlightCard';

figma.connect(
  FlightCard,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:31139',
  {
    props: {
      airline:       figma.string('Airline'),
      flightType:    figma.enum('directo', {
        direct:   true,
        layover1: false,
      }),
      duration:      figma.string('Duration'),
      airportChange: figma.boolean('aeropuertoCambio'),
      selected:      figma.boolean('Select'),
    },
    example: ({ airline, flightType, duration, airportChange, selected }) => (
      <FlightCard
        airline={airline ?? 'Flybondi'}
        flightType={flightType ?? 'direct'}
        duration={duration ?? '4h 23m'}
        origin={{ iata: 'AEP', time: '08:45' }}
        destination={{ iata: 'BRC', time: '17:25' }}
        airportChange={airportChange}
        selected={selected}
        onSelect={() => {}}
      />
    ),
  },
);
