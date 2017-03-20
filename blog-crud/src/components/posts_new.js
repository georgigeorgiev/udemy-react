import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    // enables use of this.context.router
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.createPosts(props)  // calling action creator returns promise here
            .then(() => {
                this.context.router.push('/')
            });
    }

    render() {
        const { fields: {title, categories, content}, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = 'Enter a title'
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories'
    }

    if (!values.content) {
        errors.content = 'Enter some content'
    }

    return errors;
}

// just like connect
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPosts })(PostsNew);