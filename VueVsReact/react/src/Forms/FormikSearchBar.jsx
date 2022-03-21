/* In React with Formik how can I build a search bar that will detect input value to render the buttons ?
https://stackoverflow.com/questions/66860012/in-react-with-formik-how-can-i-build-a-search-bar-that-will-detect-input-value-t
New to Formik and React I've built a search component that I'm having issues with the
passing of the input value and rendering the buttons based on input length. */

/* Given the component: */

const SearchForm = ({ index, store }) => {
  const [input, setInput] = useState('')
  const [disable, setDisable] = useState(true)

  const [query, setQuery] = useState(null)
  const results = useLunr(query, index, store)
  const renderResult = results.length > 0 || query !== null ? true : false

  useEffect(() => {
    if (input.length >= 3) setDisable(false)
    console.log('input detected', input)
  }, [input])

  const onReset = e => {
    setInput('')
    setDisable(true)
  }

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setInput('')
          setDisable(true)

          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form className="mb-5">
          <div className="form-group has-feedback has-clear">
            <Field
              className="form-control"
              name="query"
              placeholder="Search . . . . ."
              onChange={e => setInput(e.currentTarget.value)}
              value={input}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-right">
                <button type="submit" className="btn btn-primary mr-1" disabled={disable}>
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-primary"
                  value="Reset"
                  disabled={disable}
                  onClick={onReset}
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>

      {renderResult && <SearchResults query={query} posts={results} />}
    </>
  )
}


// I've isolated where my issue is but having difficulty trying to resolve:

/* <Field
  className="form-control"
  name="query"
  placeholder="Search . . . . ."
  onChange={e => setInput(e.currentTarget.value)}
  value={input}
/> */

//From within the Field's onChange and value are my problem.
//If I have everything as posted on submit the passed query doesn't exist.
//If I remove both and hard code a true for the submit button my query works.

/* Research:

    Custom change handlers with inputs inside Formik
    Issue with values Formik
    Why is OnChange not working when used in Formik?
 */



////////////////////////////// Solution //////////////////////////////

/*
You need to tap into the props that are available as part of the Formik component.
Their docs show a simple example that is similar to what you'll need:
 */

<Formik
  initialValues={{ query: '' }}
  onSubmit={(values, { setSubmitting }) => {
    setInput('')
    otherStuff()
  }}
>
  {formikProps => (
    <Form className="mb-5">
      <div className="form-group has-feedback has-clear">
        <Field
          name="query"
          onChange={formikProps.handleChange}
          value={formikProps.values.query}
        />
      </div>
      <button
        type="submit"
        disabled={!formikProps.values.query}
      >
        Submit
      </button>
      <button
        type="reset"
        disabled={!formikProps.values.query}
        onClick={formikProps.resetForm}
      >
    </Form>
    {/* ... more stuff ... */}
  )}
</Formik>

Working Codesandbox

You use this render props pattern to pull formiks props out(I usually call them formikProps, but you can call them anything you want),

which then has access to everything you need.Rather than having your input, setInput, disable, and setDisable variables,

you can just reference what is in your formikProps.For example, if you want to disable the submit button,

you can just say disable = {!formikProps.values.query}, meaning if the query value in the form is an empty string,

you can't submit the form.

As far as onChange, as long as you give a field the correct name as it corresponds to the property in your initialValues object,

formikProps.handleChange will know how to properly update that value for you.

Use formikProps.values.whatever for the value of the field, an your component will read those updates automatically.


The combo of name, value, and onChange, all handled through formikProps, makes form handing easy.

Formik has tons of very useful prebuilt functionality to handle this for you.

I recommend hanging out on their docs site and you'll see how little of your own code you have to write

to handle these common form behaviors.
