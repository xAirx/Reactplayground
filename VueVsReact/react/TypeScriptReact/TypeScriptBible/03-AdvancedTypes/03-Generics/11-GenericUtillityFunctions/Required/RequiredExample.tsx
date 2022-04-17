/* Required
Required<T> has the inverse effect of Partial in that it makes all properties of the supplied type required.
This can be used to make a looser type more strict. Also similar to Partial is that this operation is all in,
and does not provide leeway to allow certain properties to remain optional. */

interface ChartData {
  overrides?: {
    dataLabels?: {
      enabled: boolean;
    };
  };
  title: string;
  type?: "bar" | "line" | "pie";
  data: number[];
}

/*
 * The following will require all the properties to be present in order
 * to pass compilation. Note that the Required call is not recursive
 * for nested objects and the following structure of overrides will
 * still compile.
 */

type RequiredChartData = Required<ChartData>;

const temp: RequiredChartData = {
  overrides: {},
  title: "My first chart",
  data: [1, 2, 3, 4],
  type: "bar",
};

/* For selective type overrides we can extend the initial type and then redeclare the properties that we want to make required.
By using bracket property syntax like ChartData['type'] we can also reference the underlying type of the parent interface to capitalize on any upstream changes.
One use case
I have personally utilized is providing a more specific type for using ApexCharts. Their default Options interface marks most of the fields as optional.
In a component implementation I wanted to make the data series required while maintaining the partial nature for the rest of the interface.
Using this approach enables these selective refinements. */

interface ChartData {
  overrides?: {
    dataLabels?: {
      enabled: boolean;
    };
  };
  title: string;
  type?: "bar" | "line" | "pie";
  data: number[];
}

/*
 * We can optionally require certain properties while leaving others intact
 * by extending the parent type, rather than use Required. Here we will make
 * the type property required, while retaining the optional nature of overrides.
 */

interface RequiredChartData extends ChartData {
  type: ChartData["type"];
}

const temp: RequiredChartData = {
  title: "My first chart",
  data: [1, 2, 3, 4],
  type: "bar",
};

/* This growing list of utility types encourages the ability to reuse and compose types within our application,
 allowing for better cascading of types when base values change, if desired. Extending existing types is helpful when parts of a
  codebase rely on a subset or superset of an existing type. However, we should be cautious when extending unrelated types.
  In this case the cascading inheritance could create problems and unnecessary complexity. */
