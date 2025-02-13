import React from 'react';
import useStore from '../store/useStore';

function RobberyRules() {
  const robberyRules = useStore((state) => state.robberyRules);

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="gradient-text text-4xl font-bold mb-8">قوانین رابری</h1>
      <div className="bg-black/30 p-6 rounded-lg" dangerouslySetInnerHTML={{ __html: robberyRules[0]?.content || '' }} />
    </div>
  );
}

export default RobberyRules;
