import css from './Button.module.css';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <>
      <div className={css.container}>
        <button onClick={onClick} className={css.button} type="button">
          Load more
        </button>
      </div>
    </>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// import React from 'react';

// const Button = ({ onClick, images }) => {
//   if (!images || images.length === 0) {
//     return null;
//   }
//   return (
//     <button type="button" className="Button" onClick={onClick}>
//       Load more
//     </button>
//   );
// };

// export default Button;

// import React from 'react';
// import StyledButton from './Button.styled';

// const Button = ({ onClick }) => (
//   <StyledButton type="button" className="Button" onClick={onClick}>
//     Load more
//   </StyledButton>
// );

// export default Button;
