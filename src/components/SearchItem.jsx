import React from 'react'

class SearchItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const item = this.props.item
        const coverUrl = item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : 'no-image.png'
        return (
            <a className="book" target="_blank" rel="noreferrer"  href={`https://openlibrary.org${item.key}`}>
                <img  alt={`Book cover for ${item.title}`} src={coverUrl} />
                <hgroup>
                    <h2>{item.title} ({item.first_publish_year === 0 ? 'Date Unavailable' : item.first_publish_year})</h2>
                    <h3>{item.author_name && item.author_name.map((name, i) => {
                        if (i !== 0) {
                          return `, ${name}`   
                        }
                        return name
                    })}</h3>
                </hgroup>
            </a>
                        
        )
    }
}
export default SearchItem;