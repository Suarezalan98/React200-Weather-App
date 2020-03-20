import React from "react";

export default class SearchHistory extends React.Component {
  render() {
    const { historyItem } = this.props;
    if (historyItem.length === 0) {
      return (
        <div>
          <div className="card border-dark mb-3">
            <div className="card-header" style={{ fontWeight: "bold" }}>
              Search History
            </div>
            <div
              className="card-body text-center"
              style={{
                fontWeight: "bold",
                backgroundColor: "#a8e8f1",
                color: "#0e5059"
              }}
            >
              No search history yet!
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card border-dark mb-3">
            <div className="card-header" style={{ fontWeight: "bold" }}>
              Search History
            </div>
            <div className="card-body">
              <table className="table table-hover table-striped">
                <tbody>
                  {historyItem.map(item => (
                    <tr>
                      <td className="col-sm-6">{item[0]}</td>
                      <td className="col-sm-6">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}
