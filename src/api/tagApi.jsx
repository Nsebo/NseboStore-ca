import { createContext, useEffect, useState } from 'react';

export const TagContext = createContext(null);

export const TagProvider = ({ children }) => {
    const [tag, setTag] = useState([]);
    useEffect(() => {
        fetch('https://api.noroff.dev/api/v1/online-shop')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const tagObjects = {};
                data.forEach((item) => {
                    item.tags.forEach((tag) => {
                        if (!tagObjects[tag]) {
                            tagObjects[tag] = [item];
                        } else {
                            tagObjects[tag].push(item);
                        }
                    });
                });
                const tagName = Object.keys(tagObjects).map((tagKey) => {
                    return tagKey;
                });
                setTag(tagName);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return <TagContext.Provider value={{ tag }}>{children}</TagContext.Provider>;
};
