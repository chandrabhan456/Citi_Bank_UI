import React, {useEffect} from 'react';
import Card from './RecommandationCard';

function Customer() {

  

  const cardsData = [
    {
      fee: '$95',
      type: 'Travel Elite',
      cardno: 'XXXX XXXX XXXX 1234',
      valid: '04/42 VALID THRU',
      cvv: '123',
      name: 'ALICE BROWN',
      benefits: [
        '3X points on travel & dining',
        'No foreign transaction fees',
        'Priority Pass lounge access',
        '60K bonus points'
      ],
      gradientFrom: '#7B2FF7', // Purple gradient start
      gradientTo: '#F107A3'    // Purple gradient end
    },
    {
      fee: '$495',
      type: 'Business Pro',
      cardno: 'XXXX XXXX XXXX 5678',
      valid: '12/28 VALID THRU',
      cvv: '456',
      name: 'ALICE BROWN',
      benefits: [
        '4th night free on hotels',
        'Priority Pass Select',
        'Comprehensive travel insurance',
        'Concierge service'
      ],
      gradientFrom: '#00C9FF', // Blue gradient start
      gradientTo: '#92FE9D'    // Blue gradient end
    },
    {
      fee: '$0',
      type: 'Cashback Master',
      cardno: 'XXXX XXXX XXXX 6548',
      valid: '12/32 VALID THRU',
      cvv: '641',
      name: 'ALICE BROWN',
      benefits: [
        '2% cashback on everything',
        'No annual fee',
        'Price rewind protection',
        'Extended warranty'
      ],
      gradientFrom: '#FFB6C1', // Pink gradient start
      gradientTo: '#FF69B4'    // Pink gradient end
    }
  ];

  return (
    <div className="min-h-screen flex bg-[#1D2041] border border-gray-700 shadow-lg rounded-xl justify-center" style={{marginTop:'-20px'}}>
      <div className="flex flex-wrap justify-center gap-8">
        {cardsData.map((cardData, index) => (
          <Card key={index} {...cardData} />
        ))}
      </div>
 
    </div>
  );
}

export default Customer;
