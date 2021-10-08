/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "9/28/2021",
            concept: "HTML and CSS",
            entry: "Needed to brush up on my basic CSS skills. HTML seemed to come back easily",
            mood: ""
        },
        {
            id: 2,
            date: "9/29/2021",
            concept: "Flexbox",
            entry: "I still feel like i don't really understand flexbox.",
            mood: ""
        },
        {
            id: 3,
            date: "9/30/2021",
            concept: "Git & GitHub",
            entry: "Felt very confused for a while trying to get everything in order in my mind. There are lots of steps to remember.",
            mood: ""
        },
        {
            id: 4,
            date: "10/01/2021",
            concept: "Worst Website Ever",
            entry: "Feeling pretty good. Still need practice on the steps but they make sense to me now.",
            mood: ""
        },
        {
            id: 5,
            date: "10/4/2021",
            concept: "Javascript Functions",
            entry: "Feeling good about Git and Github. Worked ahead to start working on javascript objects. Nice to know that i haven't completely forgotten this stuff from the pre-work.",
            mood: ""
        },
        {
            id: 6,
            date: "10/5/2021",
            concept: "Demo Day & more Javascript",
            entry: "Still feeling good about what i'm learning. However i keep using for...in instead of for...of to write my loops and of course keep getting undefined in the terminal.",
            mood: ""
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}