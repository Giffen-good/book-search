import SearchResults from "./SearchResults"
import { shallow } from 'enzyme';

test('Sort array based on title and year', () => {
    const wrapper = shallow(<SearchResults />)
    const data = [
        {
            title: 'a',
            year: 0
        },
        {
            title: 'c',
            year: 2
        },
        {
            title: 'b',
            year: 4
        }
    ]
    expect(wrapper.instance().getSortedArray(data, 'title')).toMatchObject([
        {
            title: 'a',
            year: 0
        },
        {
            title: 'b',
            year: 4
        },
        {
            title: 'c',
            year: 2
        },
    ]);
    expect(wrapper.instance().getSortedArray(data, 'title', true)).toMatchObject([
        {
            title: 'c',
            year: 2
        },
        {
            title: 'b',
            year: 4
        },
        {
            title: 'a',
            year: 0
        }
    ]);
    expect(wrapper.instance().getSortedArray(data, 'year')).toMatchObject([
        {
            title: 'a',
            year: 0
        },
        {
            title: 'c',
            year: 2
        },
        {
            title: 'b',
            year: 4
        }
    ]);
    expect(wrapper.instance().getSortedArray(data, 'year', true)).toMatchObject([
        {
            title: 'b',
            year: 4
        },
        {
            title: 'c',
            year: 2
        },
        {
            title: 'a',
            year: 0
        }
    ]);
});