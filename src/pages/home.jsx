import React from 'react'
import { FiTwitter } from "react-icons/fi";
import HeroComponent from './../components/HeroComponent';
import CategoryComponent from './../components/CategoryComponent';
import { categories } from '../data';

export default function Home() {
  return (
    <div>
      <HeroComponent />
      {categories.map((category) => (
        <CategoryComponent title={category} />
      ))}
    </div>
  );
}
