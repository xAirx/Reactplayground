/* what are Render Props and how to they differ from Function as Children components ?

Put simply, they differ in the name of the prop.
Some popular libraries eventually started using render as a name for a prop which expects functions as their values.
In our CryptoPrices component, we would then use render instead of children: */

render() {
  const { isLoading, items } = this.state;
  const { render } = this.props;

  if (typeof render !== "function") {
    return null;
  }

  // Careful: render() does not have anything to do with the component with
  // the same name and gets injected via this.props.render

    return render({
    isLoading,
    items,
    loadData: this.loadData
  });
}

/*

It is personal preference to a degree.

You do not need to give this prop the name of render and could theoretically choose any valid name.

Any passed function will eventually turn the component into a "Render Prop".

It is possible to have an arbitrary number of props in such a component.

If you were to implement a component which returns a table which includes a table head and a body,
    both receiving data from the data component, that would be no problem at all. */
