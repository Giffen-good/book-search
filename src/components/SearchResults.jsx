import React from 'react';
import SearchItem from './SearchItem'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            loading: false,
            resultsMarkup: <></>
        }
    }
    

    generateSearchResultsMarkup(sr) {
        let content = []
        for (let i = 0; i < sr.length; i++) {
            const entry = sr[i]
            content.push(<SearchItem item={entry} key={i} />)
        }
        return content
    }

    sortItems(e) {
        let sortedResults
        
        // Sort Alphabetically by title 
        if (e.target.value === 'alphabeticalA') {
            sortedResults = this.getSortedArray(this.state.searchResults, 'title')
        } 
        else if (e.target.value === 'alphabeticalZ') {
            sortedResults = this.getSortedArray(this.state.searchResults, 'title', true)
        }
        
        //'newestDate' & 'Oldest Date' is based on the first_published_year attribute
        else if (e.target.value === 'oldest'){
            sortedResults = this.getSortedArray(this.state.searchResults, 'first_publish_year');
        }
        else if ((e.target.value === 'newest')) {
            sortedResults = this.getSortedArray(this.state.searchResults, 'first_publish_year', true);
        }
        this.setState({searchResults: sortedResults, resultsMarkup: this.generateSearchResultsMarkup(sortedResults)})

    }
    
    getSortedArray(res, prop, reverse = false) {
        let clonedRes = res.slice()
        clonedRes.sort(function (a, b) {
            if (a[prop] < b[prop]) {
                return -1
            }
            if (a[prop] > b[prop]) {
                return 1
            }
            return 0
        })
        return reverse ? clonedRes.reverse() : clonedRes
    }

   

    async componentDidMount() {
        if (this.props.keyword) {
            this.setState({loading: true})
            const searchURL = `https://openlibrary.org/search.json?q=${this.props.keyword}`
            const res = await fetch(searchURL)
            const data = await res.json()
            this.cleanData(data)
            // Default sort Entries alphabetically by title
            const sortedData = this.getSortedArray(data.docs, 'title')

            this.setState(
                {
                    searchResults: sortedData,
                    numFound: data.numFound,
                    loading: false,
                    resultsMarkup: this.generateSearchResultsMarkup(sortedData)
                }
            )
        }
    }
    
    cleanData(data) { // void
        // If first year published data is not listed, add it in with null value
        // If author name is null, remove it from array
        for (let i = 0; i < data.docs.length - 1; i++) {
            if (typeof data.docs[i].first_publish_year == 'undefined') {
                data.docs[i].first_publish_year = 'N/A'
            } 
            if (typeof data.docs[i].author_name !== 'undefined') {
                // Includes an array of "bad" values to be filtered out
                const valuesToBeFiltered = [
                    'null',
                    'NULL',
                    'Null'
                ]
                data.docs[i].author_name.filter(name => {
                    return !valuesToBeFiltered.includes(name)
                })

            }

        }

        
    }

    render() {
        let content, sortContainer
        if (this.state.loading) {
            content = <div className="loader">Loading...</div>
        } else {
            if (this.state.numFound > 0) {
                content = <div id="search-results-grid">{this.state.resultsMarkup}</div>
                sortContainer = (
                    <div className="sort-container">
                        <label htmlFor="sortBooks">Sort: </label>
                        <select className="sort-dropdown" onChange={this.sortItems.bind(this)} name="sortBooks" id="sortBooks">
                            <option value="alphabeticalA">Alphabetically by Title (Asc)</option>
                            <option value="alphabeticalZ">Alphabetically by Title (Desc)</option>
                            <option value="newest">Recently Published</option>
                            <option value="oldest">Oldest Published</option>

                        </select>
                    </div>
                )
            } else if (this.state.numFound === 0) {
                content = <h2>Sorry, no results found.</h2>
            }
        }

        return (
            <section className="search-results">
                {sortContainer}
                {content}
            </section>
        )
    }
    
}
export default SearchResults;