var React= require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
  render () {
    return <h1> Hello {this.props.name}!</h1>;
  }
}

Hello.defaultProps = {
  name: "buuuuu",
};

ReactDOM.render(<Hello  />, document.getElementById('hello-world-wrapper'));