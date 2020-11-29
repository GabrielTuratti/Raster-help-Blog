import React from 'react';
import {categoryColors} from './styles';


export default function MasonryPost ({post, tagsOnTop}) {
    
    const widownWidth = window.innerWidth
    
    const imageBackGround = {backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`};
    
    const style = widownWidth > 900 ? {...imageBackGround, ...post.style} : imageBackGround
  

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : "flex-end"}}>
                <div className="tags-container">

                    {
                        Array.isArray(post.categories) ? post.categories.map((tag, ind) =>
                        <span key={ind} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                        {tag.toUpperCase()}
                    </span>
                    ) : post.categories 
                    }


                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}
