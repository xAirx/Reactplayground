/* Query Keys are hashed deterministically!
This means that no matter the order of keys in objects, all of the following queries are considered equal:
 */
useQuery(['todos', { status, page }], ...)
useQuery(['todos', { page, status }], ...)
useQuery(['todos', { page, status, other: undefined }], ...)


/* The following query keys, however, are not equal.Array item order matters! */

useQuery(['todos', status, page], ...)
useQuery(['todos', page, status], ...)
useQuery(['todos', undefined, page, status], ...)
