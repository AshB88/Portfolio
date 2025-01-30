import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <Project
                title="Project 1"
                description="This is the first project."
                link="https://www.google.com"
            />
            <Project
                title="Project 2"
                description="This is the second project."
                link="https://www.google.com"
            />
            <Project
                title="Project 3"
                description="This is the third project."
                link="https://www.google.com"
            />
            <Project
                title="Project 4"
                description="This is the fourth project."
                link="https://www.google.com"
            />
            <Project
                title="Project 5"
                description="This is the fifth project."
                link="https://www.google.com"
            />
            <Portfolio
                title="Project 6"
                description="This is the sixth project."
                link="https://www.google.com"
            />
        </div>
    )
}

export default Portfolio;