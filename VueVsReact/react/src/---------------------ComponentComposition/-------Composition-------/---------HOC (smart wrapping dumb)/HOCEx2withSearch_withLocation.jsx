
/*
A More Practical Higher-Order Component

https://www.patterns.dev/posts/hoc-pattern/
https://codesandbox.io/s/react-patterns-hoc-search-example-dcjry?file=/src/HOC.js


Imagine we want to create a list of locations with a search form that filters them.

The JSON will be in flat files and loaded as separate components.

Let’s start by loading the data.


Our first component will load locations for our users.

We will make use of.map() to loop through the data contained in that JSON file.

 */

import React from 'react'

// Where the data is located
import preload from './locations.json'
// Manages the data
import LocationCard from './LocationCard'

// Renders the presentation of the data

/*

This component will render the data in a LocationCard component.

I moved that to a different component to keep things clear.

The data (location) from the file is received via props, and each location will be passed down to the LocationCard component.

*/

const Location = (props) => {
  return (
    <div>
      <div>
        <div>
          {<h2>Preferred Locations</h2>}
        </div>
      </div>
      <div>
        {preload.data
          .map(location => <LocationCard key={location.id} {...location} />)}
      </div>
    </div>
  )
}
export default Location




/*

Now we need a second component that, eventually, also will need search functionality.

It will be very similar to the first component we just built, but it will have a different name and load data from a different place.

We want our users to be able to search for items using an input field.

The list of items displayed on the app should be determined by the state of the search.

This functionality will be shared across the two components we are working on.

Thanks to the idea of higher order components, we can create a search container component and wrap it around other components.

*/



/*

Let’s call the component withSearch.

This component will render the input field for our search and also manage our searchTerm state.

The searchTerm will be passed as props to the wrapped component, which will be used to filter the pulled data: */


import React, { Component } from 'react'

const withSearch = (WrappedComponent) => {
  return class extends Component {
    state = {
      searchTerm: ''
    }
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value })
    }

    render() {
      return (
        <div>
          <div>
            <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
              </div>
             {/*  // setting state in the wrapped component based on searchTerm.
              // Searchterm comes from the props passed to the location component */}
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      )
    }
  }
}
export default withSearch




/*
The searchTerm is given a state of an empty string.
The value entered by the user in the search box is obtained and used to set the new state for searchTerm.
Next, we pass searchTerm to the WrappedComponent. We will make use of this when filtering the data.
To make use of the higher-order component, we need to make some changes to our presentational component.
 */

import React, { Component } from 'react'
// Where the data is located
import preload from './locations.json'
// Searches the data
import withSearch from './withSearch
// Manages the data
import LocationCard from './LocationCard'

// Renders the presentation of the data

const Location = (props) => {
    const { searchTerm } = props

    return (
        <div>
            <div>
                <div>
                    <h2>Preferred Locations</h2>
                </div>
            </div>
            <div>
                {preload.data
                    // Filter locations by the inputted search term
                    .filter(location => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
                    // Loop through the locations
                    .map(location => <LocationCard key={location.id} {...location} />)}
            </div>
        </div>
    )
}

// Passing the component to the higher order component here.
export default withSearch(Location)



/* The first thing we did above is to import the higher-order component.
Then we add a filter method to filter the data based on what the user enters in the search input.
Last, we need to wrap it with the withSearch component.
 */