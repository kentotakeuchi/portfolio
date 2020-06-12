import React, { useContext } from 'react';

import './Paginator.scss';
import { LanguageContext } from '../../../context/language-context';

const Paginator = ({ children, onPage, lastPage, currentPage, className }) => {
  const lng = useContext(LanguageContext);
  const { language } = lng;

  // // Logic for displaying page numbers
  // const pageNumbers = [];
  // for (let i = 1; i <= lastPage; i++) {
  //   pageNumbers.push(i);
  // }
  // const pageNumberElements = pageNumbers.map((number) => {
  //   if (
  //     number === 1 ||
  //     number === lastPage ||
  //     (number >= currentPage - 2 && number <= currentPage + 2)
  //   ) {
  //     return (
  //       <button
  //         key={number}
  //         id={number}
  //         onClick={() => onPage(number)}
  //         className={`paginator__number ${
  //           currentPage === number ? 'paginator__number--active' : undefined
  //         }`}
  //       >
  //         {number}
  //       </button>
  //     );
  //   }
  //   return undefined;
  // });

  return (
    <div className={`paginator ${className}`}>
      {children}
      <div className="paginator__control-box">
        {currentPage > 1 && (
          <button
            className="paginator__control"
            onClick={onPage.bind(this, 'previous')}
          >
            <span>«&nbsp;</span>
            {language === 'en' ? 'prev' : '前'}
          </button>
        )}

        {/* {pageNumberElements} */}

        {currentPage < lastPage && (
          <button
            className="paginator__control"
            onClick={onPage.bind(this, 'next')}
          >
            {language === 'en' ? 'next' : '次'}
            <span>&nbsp;»</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
