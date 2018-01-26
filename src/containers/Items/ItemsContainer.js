import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
import { fetchItemsAndUsers } from "../../redux/modules/items";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class ItemsContainer extends Component {
  // static propTypes = {}; // ??
  // propTypes = {
  //   loading: PropTypes.bool,
  //   items: PropTypes.array
  // };

  // componentDidMount() {}
  // this.props.dispatch(fetchItemsAndUsers());

  // const ItemsList = ({ data }) => (
  //   <ul>{data.items.map(({ title }, i) => <li key={i}>{title}</li>)}</ul>
  // );
  // const fetchItems = gql`
  //   query fetchMovies {
  //     items {
  //       title
  //     }
  //   }
  // `;

  render() {
    // if (this.props.isLoading) return <p>Loading</p>;

    // const filtered = this.props.items.filter(item => {
    //   return item.tags.some(tag => {
    //     return this.props.selectedTags.includes(tag.title);
    //   });
    // });
    {
      /* this.props.selectedTags.length === 0 ? this.props.items : filtered */
    }

    const { loading, items } = this.props.data;
    console.log(items);

    // console.log(filtered);

    return loading ? <p> Loading</p> : <Items list={items} />;

    // return <div>hi</div>
  }
}

const fetchItems = gql`
  query {
    items {
      id
      title
      itemowner {
        id
        email
        fullname
      }
      borrower {
        id
        fullname
      }
      created
      imageurl
      description
      available
      tags {
        id
        title
      }
    }
  }
`;

// const mapStateToProps = state => ({
//   isLoading: state.items.isLoading,
//   items: state.items.items,
//   selectedTags: state.items.selectedTags,
//   error: state.items.error,
//   itemsFilter: state.items.itemsFilter
// });

// export default connect(mapStateToProps)(ItemsContainer);
export default graphql(fetchItems)(ItemsContainer);
