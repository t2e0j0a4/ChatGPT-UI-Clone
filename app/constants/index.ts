import { MyDemoPromptsType, NavbarOptions } from '../types/index';

const demoPrompts: MyDemoPromptsType[] = [
    {
        id: 1,
        title: "Brainstrome Names",
        description : "for a non-alcoholic cocktail with coke"
    },
    {
        id: 2,
        title: "Make a content strategy",
        description : "for a newsletter featuring weekend events"
    },
    {
        id: 3,
        title: "Show me a code snippet",
        description : "of a website's navbar"
    },
    {
        id: 4,
        title: "Come up with a strategy",
        description : "for organizing my daily routine"
    }
];

const navbarOptions: NavbarOptions[] = [
    {
        id: 1,
        option: 'Type',
        moreOptions: [
            {
                id: 49,
                option: 'Letters'
            },
            {
                id: 40,
                option: 'Emails'
            },
            {
                id: 34,
                option: 'Articles'
            },
            {
                id: 91,
                option: 'Essays'
            },
            {
                id: 19,
                option: 'Youtube'
            },
            
        ]
    },
    {
        id: 2,
        option: 'Tone',
        moreOptions: [
            {
                id: 48,
                option: 'Friendly'
            },
            {
                id: 89,
                option: 'Expert'
            },
            {
                id: 70,
                option: 'Informative'
            },
            {
                id: 100,
                option: 'Assertive'
            },
            {
                id: 56,
                option: 'Normal'
            },
            
        ]
    },
    {
        id: 3,
        option: 'Length',
        moreOptions: [
            {
                id: 57,
                option: '100 Words'
            },
            {
                id: 49,
                option: '200 Words'
            },
            {
                id: 93,
                option: '300 Words'
            },
            {
                id: 68,
                option: '400 Words'
            },
            {
                id: 75,
                option: 'Expand Furthur'
            }   
        ]
    },
    {
        id: 4,
        option: 'Dig Deeper',
        moreOptions: [
            {
                id: 48,
                option: 'Elobrate'
            },
            {
                id: 89,
                option: 'Clarify'
            },
            {
                id: 70,
                option: 'Contextualize'
            },
            {
                id: 100,
                option: 'Compare'
            },
            {
                id: 56,
                option: 'Expand'
            },
            
        ]
    },
    {
        id: 5,
        option: 'Developer',
        moreOptions: [
            {
                id: 48,
                option: 'Debugging'
            },
            {
                id: 89,
                option: 'Enhance Code'
            },
            {
                id: 70,
                option: 'New API'
            },
            {
                id: 100,
                option: 'Explain Code'
            },
            {
                id: 56,
                option: 'Build Feature'
            },
            
        ]
    },
    {
        id: 6,
        option: 'Creative',
        moreOptions: [
            {
                id: 48,
                option: 'Social media'
            },
            {
                id: 89,
                option: 'Brand Voice'
            },
            {
                id: 70,
                option: 'Call to Action'
            },
            {
                id: 100,
                option: 'Content'
            },
            {
                id: 56,
                option: 'SEO Friendly'
            },
            
        ]
    },
    {
        id: 7,
        option: 'Excel Pro',
        moreOptions: [
            {
                id: 48,
                option: 'Automate Task'
            },
            {
                id: 89,
                option: 'Remove Dupes'
            },
            {
                id: 70,
                option: 'Validate Data'
            },
            {
                id: 100,
                option: 'Extract Data'
            },
            {
                id: 56,
                option: 'Compare'
            },
            
        ]
    },
    
]

export { demoPrompts, navbarOptions };