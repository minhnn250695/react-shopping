import React from 'react';

function FormatDate(value) {
  const hh = value.getHours();
  const mm = value.getMinutes();
  const ss = value.getSeconds();
  return hh + ' : ' + mm + ' : ' + ss;
}

export default FormatDate;
