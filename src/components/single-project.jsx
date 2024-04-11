import React from 'react';
import { Button } from "@/components/ui/button";
import DoneComponent from "@/components/done"

const InHunt = ({ onInHuntClick, tag1, tag2, description }) => (
  <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src="./inhunt1.png" alt="" />
      </div>
      <div className="p-8">
        <a href="#" className="block mt-1 leading-tight text-2xl font-bold text-black">InHunt</a>
        {/* Again, assuming DoneComponent is something you've got handled */}
        <DoneComponent />
        {/* Now these bastards are dynamic */}
        {description && (
          <p className="mt-2 text-slate-500 text-primary">
            {description}
          </p>
        )}
        {tag1 && (
          <p className="text-muted-foreground text-slate-500" style={{ marginTop: '7px' }}>
            #{tag1}
          </p>
        )}
        {tag2 && (
          <p className="text-muted-foreground text-slate-500" style={{ marginTop: '7px' }}>
            #{tag2}
          </p>
        )}
        <Button style={{ marginTop: '20px' }} onClick={() => onInHuntClick('InHunt')}>
          Click to see more
        </Button>
      </div>
    </div>
  </div>
);

export default InHunt;
