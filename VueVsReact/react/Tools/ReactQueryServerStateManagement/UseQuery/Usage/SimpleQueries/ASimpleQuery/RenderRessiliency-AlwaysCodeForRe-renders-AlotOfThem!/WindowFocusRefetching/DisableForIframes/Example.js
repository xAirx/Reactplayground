/* Ignoring Iframe Focus Events
A great use -case for replacing the focus handler is that of iframe events.
Iframes present problems with detecting window focus by both double - firing events and also firing false - positive
events when focusing or using iframes within your app.If you experience this, you should use an event handler that
ignores these events as much as possible.I recommend this one! It can be set up in the following way: */

import { focusManager } from 'react-query'
import onWindowFocus from './onWindowFocus' // The gist above

focusManager.setEventListener(onWindowFocus) // Boom!
