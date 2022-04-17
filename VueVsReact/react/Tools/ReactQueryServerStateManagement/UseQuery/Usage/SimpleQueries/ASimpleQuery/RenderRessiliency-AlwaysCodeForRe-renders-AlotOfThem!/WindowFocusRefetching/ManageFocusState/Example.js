/*
Managing focus state */

import { focusManager } from 'react-query'

// Override the default focus state
focusManager.setFocused(true)

// Fallback to the default focus check
focusManager.setFocused(undefined)
