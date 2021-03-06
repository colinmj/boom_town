import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import PropTypes from "prop-types";
import Styles from "./styles.js";
import moment from "moment";
import Gravatar from "react-gravatar";
import ItemContainer from "../../containers/Items";
import RaisedButton from "material-ui/RaisedButton";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ItemCard = ({ item, owner }) => (
  <div key={item.id}>
    <Card>
      <Link to={`/profile/${owner}`}>
        <CardHeader
          title={item.itemowner.fullname}
          subtitle={moment(item.created).fromNow()}
          avatar={<Gravatar email={item.itemowner.email} />}
        />
      </Link>

      <CardMedia
        overlay={
          item.borrower ? (
            <p className={"overlay"}>Borrowed by {item.borrower.fullname}</p>
          ) : null
        }
      >
        <img src={item.imageurl} alt="image" />
      </CardMedia>
      <CardTitle
        title={item.title}
        subtitle={item.tags.map(tag => {
          return tag.title;
        })}
      />
      <CardText>{item.description}</CardText>
      <CardActions>
        {item.available ? (
          <RaisedButton
            className="borrow-button"
            label="Borrow"
            secondary={true}
          />
        ) : null}
      </CardActions>
    </Card>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;
