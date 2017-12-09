/**
 * Created by samhuber on 8/3/17.
 */
import React from 'react';

const GenericHeader = ({data}) => {
  return (
    <th width={data.width}>
      {data.title}
    </th>
  );
};

export default GenericHeader;