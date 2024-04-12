import React from 'react';
import { Button } from "@/components/ui/button";
import DoneComponent from "@/components/done"

const SingleProject = ({ Dir, picDir,tag1, tag2, pos, description , onClickDir}) => (
  <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={picDir} alt="" />
      </div>
      <div className="p-8">
        <a href="#" className="block mt-1 leading-tight text-2xl font-bold text-black">{Dir}</a>
        {pos}
        {tag1}
        {tag2 && (
          <p className="text-muted-foreground text-slate-500">
            #{tag2}
          </p>
        )}
        {description && (
          <p className="mt-2 text-slate-500 text-primary">
            {description}
          </p>
        )}
        
        <Button style={{ marginTop: '20px' }} onClick={onClickDir}>
          Click to see more
        </Button>
      </div>
    </div>
  </div>
);

export default SingleProject;
