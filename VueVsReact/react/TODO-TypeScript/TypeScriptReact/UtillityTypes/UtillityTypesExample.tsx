
Once you adopt Typescript it is very helpful to learn how to use Utility Types
    (https://www.typescriptlang.org/docs/handbook/utility-types.html) so that while your React projects grows and evolves you
        don’t need to re - type interfaces for every component.In cases where you leverage spreading props you would only have
        to update the interface of the most nested component.

    Here’s an example of how we would utilize Pick and Exclude :






In this example ImageModal component renders a Button component, which when clicked will show an image in a modal.
The ImageModal receives two props the src for the image and buttonProps to be spread in the rendered Button prop.

Note that we have typed the ImageModal in a way that the buttonProps passed can include any prop of the
IButtonProps interface except the children and onClick which are already handled by the ImageModal; when using the
ImageModal you can pass any of the fontSize and color for the buttonProps.The main advantage of this is that if
we decide to add any props to the button(e.g.we want to add an icon prop, which if passed can render an icon inside
    the button) we need to only add it in IButtonProps interface and it will propagate to the buttonProps prop of the
ImageModal.This is important as we only require a single change in one interface to propagate all the way up the
hierarchy of components(This is especially helpful when a component like Button is deeply nested.We avoid having to add
types in multiple other components).
