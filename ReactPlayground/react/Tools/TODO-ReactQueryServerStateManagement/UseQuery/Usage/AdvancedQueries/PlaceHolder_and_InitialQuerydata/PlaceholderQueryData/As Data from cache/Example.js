/* Placeholder Data from Cache
In some circumstances, you may be able to provide the placeholder data for a query from the cached result of another.
A good example of this would be searching the cached data from a blog post list query for a preview version of the post, then using that as the placeholder data for your individual post query:
 */
function Todo ({ blogPostId }) {
    const result = useQuery(['blogPost', blogPostId], () => fetch(`/blogPosts/${blogPostId}`), {
        placeholderData: () => {
            // Use the smaller/preview version of the blogPost from the 'blogPosts' query as the placeholder data for this blogPost query
            return queryClient
                .getQueryData('blogPosts')
                ?.find(d => d.id === blogPostId)
        },
    })
}
