import React from 'react';

class ReactClassLifeCycles extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      hasError: false
    };
    console.log('constructor ', this.state);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props: props, state ', props, state);
    return false; // default value is:
    // if not return true/false throws error.
    // if we return false, .
    // if we return true, .
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      'get snap shotbefore update previous props, state ',
      prevProps,
      prevState
    );
    return false; // default value is:
    // if not return true/false throws error.
    // if we return false, .
    // if we return true, .
  }

  componentWillUnmount() {
    console.log('component will unmount ', this.state.count);
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log('component did mount ', this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update ', nextProps, nextState);
    return true; // default value is:
    // if not return true/false throws error.
    // if we return false, it will not re render the render function.
    // if we return true, it will re render the render function.
  }

  componentDidUpdate() {
    console.log('component did update ', this.state);
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:

  // error - The error that was thrown.
  // info - An object with a componentStack key containing information about which component threw the error.
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError error ', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch ', error, info);
  }

  render() {
    console.log('render ', this.state);
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Something went wrong.</p>;
    }
    return (
      <div>
        <p>Hello {this.state.count}</p>
        <ol>
          <li>constructor:  count: 0, hasError: false</li>
          <li>get derived state from props: props, state:  empty object, count: 0, hasError: false</li>
          <li>render:  count: 0, hasError: false}</li>
          <li>component did mount:  count: 0, hasError: false</li>
          <li>get derived state from props: props, state:  empty object, count: 1, hasError: false</li>
          <li>should component update:  empty object, count: 1, hasError: false</li>
          <li>render:  count: 1, hasError: false</li>
          <li>get snap shotbefore update previous props, state:  empty object, count: 0, hasError: false</li>
          <li>component did update:  count: 1, hasError: false</li>
        </ol>
        <p></p>
      </div>
    )
  }
}

export default ReactClassLifeCycles;
