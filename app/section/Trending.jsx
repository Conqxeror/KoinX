'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Poly from '../../public/Polygon.png';

export default function Trending() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3)); // Slice to get the top 3 trending coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className='container bg-white rounded-lg mt-5 p-5'>
      <div className='text-xl font-bold mb-1'>Trending Coins (24h)</div>
      <div>
        {trendingCoins.map((coin, index) => (
          <div key={index} className='flex justify-between mt-3 gap-2'>
            <div className='flex items-center'>
              <Image src={coin.item.small} width={6} height={6} alt={coin.item.name} className='h-6 w-6 rounded-full mr-2' />
              <div className='font-semibold'>{coin.item.name} ({coin.item.symbol.toUpperCase()})</div>
            </div>
            <div className='flex items-center h-5 p-1 bg-green-200 text-green-500 rounded-sm text-sm'>
              <Image alt='L' src={Poly} width={3} height={3} className='h-3 w-3 mr-1' /> {coin.item.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
