import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
export const SearchBar = ({ onSubmit, onChange }) => {
  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={onSubmit}>
          <button className={css.button} type="submit"></button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onChange}
          />
        </form>
      </header>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

// import React, { Component } from 'react';

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = event => {
//     this.setState({ query: event.target.value });
//     // console.log(this.state.query);
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     // console.log(this.state.query);
//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;

// import React, { Component } from 'react';
// import { Form, Header, Input, SubmitButton } from './Searchbar.styled';

// class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (!this.state.query.trim()) {
//       alert('Can not be empty"');
//       return;
//     }

//     this.props.onSubmit(this.state.query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <Header className="searchbar">
//         <Form className="form" onSubmit={this.handleSubmit}>
//           <SubmitButton type="submit" className="button">
//             <span className="button-label">Search</span>
//           </SubmitButton>

//           <Input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//         </Form>
//       </Header>
//     );
//   }
// }

// export default Searchbar;
