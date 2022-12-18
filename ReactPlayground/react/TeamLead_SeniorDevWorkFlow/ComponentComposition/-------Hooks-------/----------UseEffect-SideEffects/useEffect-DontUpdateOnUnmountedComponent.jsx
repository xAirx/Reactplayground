/*
Don't update the state on an unmounted component

One common implementation is to update the component state once an async function finishes.
But what happen if the component unmounts after finishing ? It will try to set the state anyway if we not control that.
In a real scenario, it happened to me on React Native that an user can leave a screen before a process ends.
In the following example, we have an async function that performs some operation and while this is running I want render a “loading” message. Once the function finish I will change the state of “loading” and render another message.

*/

function Example(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetchAPI.then(() => {
            setloading(false)
        })
    }, [])

    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>
}

/* But, if we exit the component and fetchAPI ends and sets the loading state, this will prompt the error mentioned at the beginning.
So we need to be sure that the component is still mounted when fetchAPI is finished. */

function Example(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        let mounted = true
        fetchAPI.then(() => {
            if (mounted) {
                setloading(false)
            }
        })

        return function cleanup() {
            mounted = false
        }
    }, [])

    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>
}

This way we can ask if the component is still mounted. Just adding a variable that will change to false if we dismount. */
