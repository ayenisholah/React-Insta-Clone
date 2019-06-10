import React from 'react';


function PostContainer(props) {
    return (
        <>
            {
                props.instagram.map(instagram => (
                    <div
                        key={instagram.id}
                        className='container'
                    >
                        <div className='profile'>
                        <img src={instagram.thumbnailUrl} alt={instagram.username}/>
                        <h3>{instagram.username}</h3>
                        </div>
                        <img src={instagram.imageUrl} alt={instagram.username}/>
                            <p>{instagram.likes} likes</p>
                            <p>{instagram.timestamp}</p>
                    </div>
                ))
            }
        </>
    );
}

export default PostContainer;