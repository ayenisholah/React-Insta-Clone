import React from 'react';
import CommentSection from './CommentSection';



function PostContainer (props) {
    return (
        <>
            {
                props.instagram.map(instagram => (
                <div
                    key={instagram.id}
                    className='container'
                >
                    <div className='profile'>
                    <img className="avi" src={instagram.thumbnailUrl} alt={instagram.username}/>
                    <h3>{instagram.username}</h3>
                    </div>
                    <div className="content">
                        <img src={instagram.imageUrl} alt={instagram.username}/>
                        <p>{instagram.likes} likes</p>
                        <p>{instagram.timestamp}</p>
                    </div>                   
                     </div> 
                ))
            }
            <CommentSection
            
            />
        </>
    );
}

PostContainer.defaultProps = {
    instagram: []
}


export default PostContainer;