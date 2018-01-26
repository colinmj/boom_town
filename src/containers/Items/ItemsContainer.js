import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
import { fetchItemsAndUsers } from "../../redux/modules/items";
import { connect } from "react-redux";

class ItemsContainer extends Component {
  static propTypes = {}; // ??

  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }

  render() {
    if (this.props.isLoading) return <p>Loading</p>;

    const filtered = this.props.items.filter(item => {
      return item.tags.some(tag => {
        return this.props.selectedTags.includes(tag.title);
      });
    });

    console.log(filtered);

    return (
      <Items
        list={
          this.props.selectedTags.length === 0 ? this.props.items : filtered
        }
      />
    );

    // return <div>hi</div>
  }
}

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  items: state.items.items,
  selectedTags: state.items.selectedTags,
  error: state.items.error,
  itemsFilter: state.items.itemsFilter
});

export default connect(mapStateToProps)(ItemsContainer);
