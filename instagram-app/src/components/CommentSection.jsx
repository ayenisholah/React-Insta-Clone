import React from 'react';

function CommentSection (props) {
    return (
        <>
            {
                props.instagram.map(instagram => (
                    <div
                        key={instagram.id}
                        className='comment'
                    >
                        CommentSection
                    </div>
                ))
            }
        </>
    );
}

export default CommentSection;