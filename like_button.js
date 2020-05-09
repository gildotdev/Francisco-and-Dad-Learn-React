"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    const isLiked = this.state.liked;
    if (isLiked) {
      return e("button", { disabled: isLiked }, "❤️ Liked");
    } else {
      return e(
        "button",
        { onClick: () => this.setState({ liked: true }) },
        "Like"
      );
    }
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
