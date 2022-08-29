// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Content from './Components/Content';

const Example: React.FC = () => {
  return (
    <>
      <FusePageCarded
        contentClassName=" flex flex-col gap-[10px] justify-center items-center"
        content={<Content />}
      />
      {/* teste */}
    </>
  );
};

export default Example;
