import { mount } from 'marketing/MarketingApp'; // Importing the mount function from the marketing 
// micro-frontend.  we can not call as generic react component because in futur=te container or
//  marketing app might be changed to angular or vue or any other tch
import React, { useEffect, useRef } from 'react';

export default () => {
    const ref = useRef(null); // Creating a ref to hold the marketing app mount point
    useEffect(() => {
        mount(ref.current); // Mounting the marketing app to the current ref element
    })
    return (
        <div ref={ref}></div> // Rendering a div that will be used as the mount point for the marketing app
    )
}