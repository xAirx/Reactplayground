// React dangerouslySetInnerHTML is used to inject html into the DOM and is not supported in IE.
// This is a workaround to inject html into the DOM.

/* In React, there is a prop named dangerouslySetInnerHTML.
It literally warns you that inserting HTML string carelessly
 is a dangerous move. dangerouslySetInnerHTML accepts
 an object that has __html property with HTML strings as its value.
 */

return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
