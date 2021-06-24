import SearchItem from './SearchItem';

import { shallow } from 'enzyme';
test('Renders search result', () => {

    const searchData = {
        "key": "/works/OL13478504M",
        "text": [
            "/works/OL13478504M",
            "Infectiveness of milk of cows which have reacted to tuberculin test",
            "OL13478504M",
            "Mohler, John R. b. 1875.",
            "U.S. G.P.O.",
            "United States. Bureau of Animal Industry -- Public records.",
            "Milk."
        ],
        "author_name": ["Mohler, John R"],
        "type": "work",
        "seed": [
            "/books/OL13478504M",
            "/works/OL13478504M",
            "/subjects/united_states._bureau_of_animal_industry_--_public_records.",
            "/subjects/milk."
        ],
        "title": "Infectiveness of milk of cows which have reacted to tuberculin test",
        "title_suggest": "Infectiveness of milk of cows which have reacted to tuberculin test",
        "has_fulltext": false,
        "edition_count": 1,
        "edition_key": [
            "OL13478504M"
        ],
        "publish_date": [
            "1903"
        ],
        "publish_year": [
            1903
        ],
        "first_publish_year": 1903,
        "publish_place": [
            "[Washington, D.C.]"
        ],
        "contributor": [
            "Mohler, John R. b. 1875."
        ],
        "last_modified_i": 1621433243,
        "ebook_count_i": 0,
        "publisher": [
            "U.S. G.P.O."
        ],
        "subject": [
            "United States. Bureau of Animal Industry -- Public records.",
            "Milk."
        ],
        "publisher_facet": [
            "U.S. G.P.O."
        ],
        "subject_facet": [
            "Milk.",
            "United States. Bureau of Animal Industry -- Public records."
        ],
        "_version_": 1700195985862426624,
        "subject_key": [
            "milk.",
            "united_states._bureau_of_animal_industry_--_public_records."
        ]
    }

    const wrapper = shallow(<SearchItem item={searchData} key={0} />)
    
    const title = wrapper.find('h2').text()
    expect(title).toEqual("Infectiveness of milk of cows which have reacted to tuberculin test (1903)")

    const author = wrapper.find('h3').text()
    expect(author).toEqual('Mohler, John R')
    

})






