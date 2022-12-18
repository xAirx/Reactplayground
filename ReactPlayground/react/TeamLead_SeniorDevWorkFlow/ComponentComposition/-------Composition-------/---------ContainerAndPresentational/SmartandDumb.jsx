/* Container & Presentational (Smart & Dumb)
Separating the logic of the display is a practice that has been loved by developers. When we discover React, we can be surprised by the JSX which seems to go in the opposite direction.

So, one of the most popular techniques is to recreate this notion of template through the “Container & Presentational Components”. Also called “Smart & Dumb Components” or “Stateful & Pure Components”.

Do not miss: the article Presentational and Container Components by Dan Abramov.
It is a division into two parts. The container prepares data and actions (logic), and passes them to the display component through props.

This strict divide into business logic and display logic enables component based development. It allows us to create layout components which do not know of possible API connections and only display data which is passed to them, no matter where it comes from.

It also enables the business logic components to only concern themselves with business logic without caring about how the data is displayed in the end.


 */
