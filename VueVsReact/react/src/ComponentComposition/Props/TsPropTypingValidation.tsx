Example;
/*
Note: This applies to both arrow functional components and regular functional components.

If you write a TypeScript component like so: */

const InputThing = (props) => {
  return <input value={props.value} />;
};

/* You'll either get an info message from the TypeScript compiler saying:

    Parameter 'props' implicitly has an 'any' type, but a better type may be inferred from usage. ts(7044)

Or an error message saying:

    Parameter 'props' implicitly has an 'any' type. ts(7006)

If you get the first one, you should add "noImplicitAny": true to your tsconfig.json file,
otherwise you're not fully taking advantage of what TypeScript has to offer.

Given that as the baseline, let's say you wanted
to use the destructured props children and value. You'd write: */

const InputThing = ({ value, children }) => {
  return <input value={value} />;
};

/* Two errors this time. One for value and one for children.
Both saying that they have implicit "any" types, which aren't allowed.
So now it's time to add type checking into the mix via a TypeScript interface:
 */
interface InputThingProps {
  value: string;
}

const InputThing: FC<InputThingProps> = ({ value, children }) => {
  return <input value={value} />;
};

/* No more errors and now we've enforced specific property types everywhere that InputThing is used.
I'll note that these TypeScript types/interfaces can be arbitrarily complex,
above and beyond that which you could get from PropTypes alone.
This works because the generic-typed FC<> takes a props interface as its type.
FC (FunctionComponent) is defined in the React source as follows: */

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

/* So children is allowable by default and becomes unioned with whatever props you provide. Hey, look! PropTypes is in there too!
What if you try to use a non-existent prop?

If you try to use a foo prop on InputThing like so:
 */
const Parent = () => {
  return <InputThing foo="bar" />;
};

/* You get an error saying:

    Property 'foo' does not exist on type 'IntrinsicAttributes & InputThingProps & { children?: ReactNode; }' .ts(2322)

Which means you now have a reliable, TypeScript-only mechanism to define your props and ensure you provide them 100% correctly across all of your components! */
