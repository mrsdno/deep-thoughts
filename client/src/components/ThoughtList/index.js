import React from 'react';

const ThoughtList = ( { thoughts, title } ) => {
    if (!thoughts.length) {
        return <h3>No thoughts yet!</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {thoughts &&
                thoughts.map(thought => (

                    // key prop to internally track which data needs to be re-rendered if something changes
                    <div key={thought.id} className="carb mb-3">
                        <p className="card-header">
                            {thought.username}
                            thought on {thought.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">
                                Reactions: {thought.reactionCount} || Click to{' '}
                                {thought.reactionCount ? 'see' : 'start'} the discussion!
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList; 