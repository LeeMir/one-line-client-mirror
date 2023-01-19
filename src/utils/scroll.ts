import React from 'react';

export const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};
