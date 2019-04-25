import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:30PM"
                content="Nice blog post"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:30PM"
                content="I like the subject"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 1:30PM"
                content="I like the writing"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

