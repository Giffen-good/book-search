## Technical Questions
1. ~4 hours. I think the main thing I would add is a nice interface. While I feel the design meets the minimum requirement, I paid little attention to creating a very good user experience, and focused instead on creating a MVP that satisfies the criteria outlined within the user story. Additionally, large results need to be paginated, and sorting methods applied across all results rather than just the 100 results included within the search response. The data seems very messy and inconsistent too. In the long term, it would be good to have better functions in place to clean it up before use.
2. One exciting, yet very modest, development in 2021 is the extended browser support offered for flex's "gap" property in CSS --- here is a deep look at how it's used https://twitter.com/sulco/status/1388113988534341634
3. Yes. I have experience writing a lot of patches to improve performance of production code. I'll limit the scope of this answer to front-end performance improvements as these are directly related to the job application. I like to make use of diagnostic tools to collect feedback and recommendations for improvement. Lighthouse is mentioned above, they provide a lot of really great recommendations for improving load times. Check the network tab to make sure everything is loading in the appropriate order, similarly, confirm that certain assets are not needlessly render-blocking. If there is a drop in frames as a result of computationally intensive events and methods, record the page performance within dev tools in order to assess what is most costly, then direct energy towards making improvements there. Is there an opportunity to improve performance through caching? Compression? Bundling?
4. Though I'm sensing that these are problems that resists very simple solutions, I feel the search response is still very unstructured in some ways; this is not ideal. Just looking at the search endpoint, I'm observing that many of the objects in the response don't share a common set of properties, where they do, their values have varying data-types. Even looking at undefined/null values, we could benefit from having a more standardized way of handling this. I don't think I'm in a good position to think too deeply about it without a good sense about how the data is archived in the first place. Still, maybe some of these issues could be tackled through good migration scripts.
5.
```json
{
  	"name": "Christopher Rock",
  	"age": "26",
  	"home_city": "Mississauga, On.",
  	"personal_portfolio": "https://rock-media.ca",
    "interests": {
        "favorite_movies": ["City of God", "Battle Royale", "There Will Be Blood", "Parasite", "Office Space", "Team America: World Police"],
        "favorite_books": ["Clean Architecture", "Book of Longing", "Capital in the Twenty-first Centery", "Thinking, Fast and Slow", "The Essential Richard Outram", "Notes from Underground"],
        "favorite_musicians": ["Tool", "Tim Maia", "Breakbot", "The RH Factor", "Against All Logic", "Snarky Puppy", "The Mars Volta", "Madvillian"]
  	},
	"description": "I am a highly motivated and creative individual, a team player who thrives in high-stress environments. I love programming even though I sometimes feel very insecure about my code."
}
```