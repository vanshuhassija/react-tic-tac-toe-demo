import React from "react";
import GridItem from "./GridItem";

class GridRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-row">
        {[0, 1, 2].map((item) => {
          return (
            <GridItem
              colIndex={item}
              rowIndex={this.props.index}
              boardState={this.props.boardState}
              updateBoard={this.props.updateBoard}
            />
          );
        })}
      </div>
    );
  }
}

export default GridRow;

// State Variable ---> gameState
