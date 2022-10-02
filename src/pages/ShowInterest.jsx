import React, { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/app/Loader';
import { Heading, Subheading } from '../components/typography/Index';
import OpportunityDetails from '../components/investments/OpportunityDetails';
import SubmitInterest from '../components/investments/SubmitInterest';
import Button from '../components/app/Button';
import InvestmentDetail from '../components/investments/InvestmentDetail';
import noPreview from '../assets/no-preview.png';

const ShowInterest = () => {
  const [loading, updateLoading] = useState(true);
  const [interest, updateInterest] = useState(null);
  const [showInterest, updateShowInterest] = useState(false);

  const fetchInvestment = async () => {
    updateLoading(true);
    // const res = await getInvestment()
    updateInterest({});
    updateLoading(false);
  };

  useEffect(
    () => {
      fetchInvestment();
    },
    [],
  );

  const pitches = [
    {
      title: 'Resumen de la inversión',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Problema y oportunidad',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Solución y Producto',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];

  return (
    <div className="flex p-6 h-full">
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="w-[70%] w-full h-full pr-8">
            <div className="flex space-x-2 items-center">
              <div className="w-16 h-16">
                <img src={(interest.logo && `${interest.logoType},${interest.logo}`) || noPreview} alt="" className="w-full h-full" />
              </div>
              <Heading className="text-2xl">
                {interest.title}
                Checkin
              </Heading>
            </div>
            <Subheading className="text-black-600">
              {interest.description}
              Creando la experiencia check-in del futuro
            </Subheading>

            {showInterest && <SubmitInterest />}
            {!showInterest && <InvestmentDetail pitches={pitches}/>}

          </div>
          <div className="w-[30%]">
            <div className="w-full flex justify-end space-x-5 mb-4">
              <FontAwesomeIcon className="cursor-pointer text-black-400" icon={faStar} size="xl" />
              <FontAwesomeIcon className="cursor-pointer text-black-400" icon={faArrowUpFromBracket} size="xl" />
            </div>
            {!showInterest && (
              <Button type="primary" onClick={() => updateShowInterest(true)}>Mostrar interés</Button>
            )}
            <OpportunityDetails />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowInterest;
